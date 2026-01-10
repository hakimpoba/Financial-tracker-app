// "use client";



// import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

// import { Button } from "@/components/ui/button";
// import { SignOutButton, UserButton } from "@clerk/nextjs";
// import {db} from "@/src/db";
// import { accounts } from "@/db/schema";
// import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
// // export default async function Home() {
// export default function Home() {
//   const { onOpen } = useNewAccount();

//   // const result = await db.select().from(accounts);
//   // const result1 = await db.execute("select 1 as connected");
//   // const rows = result1.rows;
//   return (
//      <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
//       <h1 className="text-2xl font-semibold">My App</h1>
//       <div>
//         <Button onClick={onOpen}>
//           Add an account
//         </Button>
//       </div>
//       {/* <h1>Drizzle + Neon Test</h1>
//     <pre>{JSON.stringify(result, null, 2)}</pre> */}

//     <SignOutButton redirectUrl="/">
//       <button className="px-4 py-2 bg-red-500 text-white rounded-md">
//         Sign Out
//       </button>
//     </SignOutButton></nav>
//   )
// }


// export default function Home() {
//   const {data: accounts, isLoading } = useGetAccounts();

//   if (isLoading) {
//     return (
//       <div>
//         Loading...
//       </div>
//     )
//   }
//   return (
//     <div>
//       {accounts?.map((account) => (
//         <div key = {account.id}>
//           (account.name)

//         </div>
//       ))}
//     </div>
//   );
// };


import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";

export default function DashboardPage() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <DataGrid />
      <DataCharts />
    </div>
  );
};

