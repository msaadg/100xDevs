import { Avatar } from "./avatar"

export const AppBar = () => {
  return (
    <div className="flex justify-between border-b-2 py-2 px-5">
      <div className="flex flex-col justify-center font-bold">
        Medium
      </div>
      <div>
        <Avatar size="big"/>
      </div>
    </div>
  )
}