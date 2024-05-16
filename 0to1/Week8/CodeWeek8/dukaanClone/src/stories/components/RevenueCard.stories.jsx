import { RevenueCard } from "../../components/RevenueCard";

const meta = {
    component: RevenueCard
};

export default meta;


// These are like tests that would show the contributors how the UI would appear under various conditions
export const BigAmount = {
    args: {
        orderCount: "123",
        title: "Amount",
        amount: "100000000"
    }
}

export const SmallAmount = {
    args: {
        orderAmount: "123",
        title: "Amount",
        amount: "10"
    }
}