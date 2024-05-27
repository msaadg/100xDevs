import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { auth } from '../middlewares/auth';

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
  Variables: {
    userId: string,
  }
}>();

blogRouter.use('/*', auth);

blogRouter.post('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const userId = c.get('userId');
  const body = await c.req.json();
  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId
      }
    });
    return c.json({ id: blog.id });
  } catch(e) {
    c.status(403)
    return c.json({ error: "error while creating blog" })
  }
})
  
blogRouter.put('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const userId = c.get('userId');
  const body = await c.req.json();
  try {
    const blog = await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published || false
      }
    })
    return c.json({ id: blog.id });
  } catch(e) {
    c.status(403)
    return c.json({ error: "error while updating blog" })
  }
})
  
blogRouter.get('/id/:id', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())  

  const id = c.req.param('id');
  const blog = await prisma.post.findUnique({
    where: {
      id
    }
  });
  if (!blog) {
    c.status(404);
    return c.json({ error: "blog not found" });
  }
  return c.json(blog);
})

blogRouter.get('/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blogs = await prisma.post.findMany();
  console.log(blogs);
  console.log("hello")
  return c.json(blogs);
})

export default blogRouter;
