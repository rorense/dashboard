export interface GetKpisResponse {
    id: string;
    _id: string;
    __v: number;
    totalProfit: number;
    totalRevenue: number;
    totalExpenses: number;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
}

export interface ExpensesByCategory {
    salaries: number;
    supplies: number;
    services: number;
}

export interface Month {
    id: string;
    month: string;
    expenses: number;
    revenue: number;
    nonOperationalExpenses: number;
    operationalExpenses: number;
}

export interface Day {
    id: string;
    date: string;
    expenses: number;
    revenue: number;
}