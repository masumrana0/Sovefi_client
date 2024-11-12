import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUpRight,
  BarChart2,
  DollarSign,
  PieChart,
  Wallet,
} from "lucide-react";

export default function LendersDashboard() {
  return (
    <div className="min-h-screen p-8">
      <div className="w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Lenders Dashboard</h1>
          <Button>Invest Now</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Invested
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,234,567.89</div>
              <p className="text-xs text-muted-foreground">
                +15.2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Loans
              </CardTitle>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,543</div>
              <p className="text-xs text-muted-foreground">+123 new loans</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average ROI</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.7%</div>
              <p className="text-xs text-muted-foreground">
                +0.5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Available Balance
              </CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,678.90</div>
              <p className="text-xs text-muted-foreground">Ready to invest</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="opportunities" className="space-y-4">
          <TabsList>
            <TabsTrigger value="opportunities">
              Investment Opportunities
            </TabsTrigger>
            <TabsTrigger value="portfolio">Your Portfolio</TabsTrigger>
          </TabsList>
          <TabsContent value="opportunities" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">
                Investment Opportunities
              </h2>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by risk" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Risk Levels</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Card>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Loan ID</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Interest Rate</TableHead>
                      <TableHead>Term</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "L1001",
                        amount: "$10,000",
                        rate: "7%",
                        term: "12 months",
                        risk: "Low",
                      },
                      {
                        id: "L1002",
                        amount: "$25,000",
                        rate: "9%",
                        term: "24 months",
                        risk: "Medium",
                      },
                      {
                        id: "L1003",
                        amount: "$50,000",
                        rate: "12%",
                        term: "36 months",
                        risk: "High",
                      },
                      {
                        id: "L1004",
                        amount: "$15,000",
                        rate: "8%",
                        term: "18 months",
                        risk: "Low",
                      },
                      {
                        id: "L1005",
                        amount: "$30,000",
                        rate: "10%",
                        term: "30 months",
                        risk: "Medium",
                      },
                    ].map((loan) => (
                      <TableRow key={loan.id}>
                        <TableCell className="font-medium">{loan.id}</TableCell>
                        <TableCell>{loan.amount}</TableCell>
                        <TableCell>{loan.rate}</TableCell>
                        <TableCell>{loan.term}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                              loan.risk === "Low"
                                ? "bg-green-100 text-green-800"
                                : loan.risk === "Medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {loan.risk}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button size="sm">Invest</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="portfolio" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Your Portfolio</h2>
              <Input placeholder="Search loans..." className="w-[300px]" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Distribution</CardTitle>
                  <CardDescription>
                    Breakdown of your investments by risk level
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center h-[300px]">
                  <PieChart className="h-full w-full text-muted-foreground" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Active Investments</CardTitle>
                  <CardDescription>Your current active loans</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Loan ID</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Interest Earned</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: "L0987",
                          amount: "$5,000",
                          earned: "$250",
                          status: "On Time",
                        },
                        {
                          id: "L0988",
                          amount: "$10,000",
                          earned: "$600",
                          status: "On Time",
                        },
                        {
                          id: "L0989",
                          amount: "$15,000",
                          earned: "$450",
                          status: "Late",
                        },
                        {
                          id: "L0990",
                          amount: "$20,000",
                          earned: "$1,200",
                          status: "On Time",
                        },
                      ].map((investment) => (
                        <TableRow key={investment.id}>
                          <TableCell className="font-medium">
                            {investment.id}
                          </TableCell>
                          <TableCell>{investment.amount}</TableCell>
                          <TableCell>{investment.earned}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                                investment.status === "On Time"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {investment.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>
              Your latest investment activities and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[
                {
                  avatar: "JD",
                  name: "Investment Made",
                  description: "You invested $5,000 in loan L1001",
                  time: "2 hours ago",
                },
                {
                  avatar: "LR",
                  name: "Loan Repayment",
                  description: "Received $250 interest from loan L0985",
                  time: "1 day ago",
                },
                {
                  avatar: "AS",
                  name: "Account Deposit",
                  description: "Successfully deposited $10,000 to your account",
                  time: "3 days ago",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={`/placeholder.svg?height=36&width=36`}
                      alt="Avatar"
                    />
                    <AvatarFallback>{activity.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-sm text-muted-foreground">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
