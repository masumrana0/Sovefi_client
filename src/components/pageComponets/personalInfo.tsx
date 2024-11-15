"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch } from "@/redux/hook";
import { setToLocalStorageAsStringify } from "@/utils/local-storage";
import { PERSONAL_INFO } from "@/constant/storage.key";
import { setNext } from "@/redux/features/loneApplication/loneApplication";

const personalInfoSchema = z.object({
  name: z.object({
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().max(1).optional(),
    lastName: z.string().min(1, "Last name is required"),
  }),
  email: z.string().email("Invalid email address"),
  address: z.object({
    fullAddress: z.string().min(1, "City is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(2, "State is required"),
    zipCode: z.string().regex(/^\d{5}$/, "ZIP code must be 5 digits"),
  }),
  aptType: z.string().optional(),

  contactNo: z.string(),
  timeAtCurrentAddress: z.object({
    years: z.number().min(0),
    months: z.number().min(0).max(11),
  }),
  housingStatus: z.string().min(1, "Housing status is required"),
  ssn: z.string(),
  dateOfBirth: z.string(),
  driversLicense: z.string().min(1, "Driver's license is required"),
  citizenship: z.array(z.string()).min(1, "Please select at least one country"),
  workStatus: z.string().min(1, "Work status is required"),
  otherIncome: z.object({
    hasOtherIncome: z.boolean(),
    sources: z
      .array(
        z.object({
          amount: z.number().optional(),
          source: z.string().optional(),
          description: z.string().optional(),
        }),
      )
      .optional(),
  }),
  monthlyHousingCosts: z.number().min(0),
  homeEquity: z.number().min(0).optional(),
  checkingSavings: z.number().min(0),
  retirementAssets: z.number().min(0),
});

const states = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  // Add all states...
];

const housingStatuses = ["Own", "Rent", "Living with Family", "Other"];

const workStatuses = [
  "Employed Full-Time",
  "Employed Part-Time",
  "Self-Employed",
  "Retired",
  "Student",
  "Other",
];

export default function PersonalInfoForm() {
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      timeAtCurrentAddress: { years: 0, months: 0 },
      citizenship: [],
      otherIncome: {
        hasOtherIncome: false,
        sources: [],
      },
    },
  });

  function onSubmit(values: z.infer<typeof personalInfoSchema>) {
    setToLocalStorageAsStringify(PERSONAL_INFO, values);
    dispatch(setNext());
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Your Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="name.firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">First</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name.middleName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">MI</FormLabel>
                    <FormControl>
                      <Input {...field} maxLength={1} className="w-16" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name.lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Last</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">Email Address</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="address.fullAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">
                      Home Street Address (no P.O. boxes)
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="aptType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Apt, etc.</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="apt">Apartment</SelectItem>
                        <SelectItem value="suite">Suite</SelectItem>
                        <SelectItem value="unit">Unit</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="address.city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">City</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address.state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">State</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state.value} value={state.value}>
                            {state.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address.zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Zip Code</FormLabel>
                    <FormControl>
                      <Input {...field} maxLength={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="contactNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">
                      Home Phone (with area code)
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="timeAtCurrentAddress.years"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl">Years</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeAtCurrentAddress.months"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xl">Months</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="housingStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Housing Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {housingStatuses.map((status) => (
                          <SelectItem key={status} value={status.toLowerCase()}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="ssn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">
                      Social Security (9 digits)
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">
                      Date Of Birth (mm/dd/yyyy)
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="MM/DD/YYYY" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="driversLicense"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">
                      Drivers License (last 4 digits)
                    </FormLabel>
                    <FormControl>
                      <Input {...field} maxLength={4} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="citizenship"
              render={() => (
                <FormItem>
                  <FormLabel className="text-xl">
                    Are you a citizen of any of the following countries? Check
                    all that apply.
                  </FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {["United States"].map((country) => (
                      <FormField
                        key={country}
                        control={form.control}
                        name="citizenship"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={country}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(country)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          country,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== country,
                                          ),
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {country}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">
              Your Employment Information
            </h2>

            <FormField
              control={form.control}
              name="workStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">Work Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select work status..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {workStatuses.map((status) => (
                        <SelectItem key={status} value={status.toLowerCase()}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">
              Other Financial Information
            </h2>

            <FormField
              control={form.control}
              name="otherIncome.hasOtherIncome"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-xl">
                    Do you have Other &quot;Annual&quot; Income?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(value === "yes")}
                      defaultValue={field.value ? "yes" : "no"}
                      className="flex flex-row space-x-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormDescription>
                    Alimony, child support, or separate maintenance income need
                    not be revealed if you do not wish to have it considered as
                    a basis for repaying this obligation.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="monthlyHousingCosts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">
                    Total Monthly Housing Costs
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    Estimate, in the case of homeowners, of all monthly mortgage
                    payments, including first mortgages, second mortgages, and
                    home equity loans. Renters, please enter monthly rent.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="homeEquity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">
                    Estimated Equity in Home (if owned)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    Your equity is the difference between the estimated market
                    value of your home, less the balance of any outstanding
                    mortgages, including home equity loans.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="checkingSavings"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">
                    Checking and Savings Balances plus Stocks and Bonds
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    Includes the sum of checking and savings accounts, stocks
                    and bonds. Do not include the value of any home equity,
                    auto(s), 401(k)s or IRAs.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="retirementAssets"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">
                    Retirement Assets (401(k), 403(b), 457, IRA, etc)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    Retirement Assets include only monies that exist today and
                    are 100 percent vested and owned by you.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full text-xl">
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
