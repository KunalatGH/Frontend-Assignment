import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const columns = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const data: User[] = [
  { id: 1, name: "Kunal", email: "kunal@example.com", age: 22 },
  { id: 2, name: "Priya", email: "priya@example.com", age: 28 },
  { id: 3, name: "Rahul", email: "rahul@example.com", age: 25 },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
};
export default meta;

export const Default: StoryObj<typeof DataTable<User>> = {
  args: {
    data,
    columns,
    selectable: true,
    loading: false,
  },
};
