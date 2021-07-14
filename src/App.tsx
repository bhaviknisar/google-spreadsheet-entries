import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "react-calendar/dist/Calendar.css";

interface IDataProps {
  name: string;
  id: string;
  plan: string;
  months: string;
  type: string;
  recharge_date: string;
  renewal_date: string;
  amount: string;
  installation: string;
  router: string;
  balance: string;
  total: string;
  plan_amount: string;
  payment_mode: string;
}

const App: React.FC = () => {
  const formik = useFormik<IDataProps>({
    initialValues: {
      name: "",
      plan_amount: "",
      id: "",
      plan: "",
      amount: "",
      balance: "",
      recharge_date: "",
      renewal_date: "",
      installation: "",
      months: "",
      payment_mode: "",
      router: "",
      total: "",
      type: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Customer name is required"),
      id: yup.string().required("id is requierd"),
      plan: yup.string().required("plan is requierd"),
      months: yup.string().required("months is requierd"),
      recharge_date: yup.string().required("recharge date is requierd"),
      renewal_date: yup.string().required("renewal date is required"),
      type: yup.string().required("recharge type is required"),
      amount: yup.string().required("amount is requierd"),
      installation: yup.string().required("installation is requierd"),
      router: yup.string().required("router status is requierd"),
      balance: yup.string(),
      plan_amount: yup.string().required("Plan amouont is requierd"),
      total: yup.string().required("total is requierd"),
      payment: yup.string().required("payment mode is requierd"),
    }),
    onSubmit: (values: any) => {
      return console.log(values);
    },
  });

  return (
    <>
      <div
        className="flex flex-row w-full h-full justify-center items-center bg-primary-50"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <span className="text-6xl font-semibold text-primary-500">
            Welcome to spreadsheet!
          </span>
          <div className="mt-3">
            <span className="text-gray-500 text-xl">
              Fill the following and get your data into excel sheet
            </span>
          </div>
        </div>
      </div>
      <div style={{ height: "100vh" }} className="p-2 capitalize font-semibold">
        <div className="text-center">
          <span className="text-2xl text-gray-500">
            After filling this data press submit to continue
          </span>
        </div>

        <form onSubmit={formik.submitForm} className="mx-auto container mt-10">
          <div className="flex w-full flex-wrap flex-row">
            <div className="flex-1 m-1">
              <input
                type="text"
                name="name"
                placeholder="Enter customer name"
                className="px-2 focus:outline-none focus:border focus:border-secondary-500 border-primary-500 border rounded-md py-2 w-full"
                id="name"
                onChange={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
                value={formik.values.name}
              />
              <div className="flex flex-row justify-end">
                <span className="text-red-500 text-sm font-semibold">
                  {!formik.values.name && formik.errors.name}
                </span>
              </div>
            </div>
            <div className="flex-1 m-1">
              <input
                type="text"
                name="id"
                placeholder="Enter customer id"
                className="px-2 focus:outline-none focus:border focus:border-secondary-500 border-primary-500 border rounded-md py-2 w-full"
                id="id"
                onChange={formik.handleChange("id")}
                onBlur={formik.handleBlur("id")}
                value={formik.values.id}
              />
              <div className="flex flex-row justify-end">
                <span className="text-red-500 text-sm font-semibold">
                  {!formik.values.id && formik.errors.id}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row  mt-3">
            <div className="flex-1 m-1">
              <select
                name="plan"
                className="w-full p-2 focus:outline-none bg-primary-100 border  rounded-md m-1 appearance-none"
                id="plan"
                onChange={formik.handleChange("plan")}
                onBlur={formik.handleBlur("plan")}
                value={formik.values.plan}
              >
                <option
                  value=""
                  className="uppercase border border-primary-500 p-2"
                >
                  Select network speed
                </option>
                <option
                  value="5 MBPS"
                  className="uppercase border border-primary-500 p-2"
                >
                  5 mbps
                </option>
                <option
                  value="10 MBPS"
                  className="uppercase border border-primary-500 p-2ase"
                >
                  10 mbps
                </option>
                <option
                  value="15 MBPS"
                  className="uppercase border border-primary-500 p-2"
                >
                  15 mbps
                </option>
                <option
                  value="25 MBPS"
                  className="uppercase border border-primary-500 p-2"
                >
                  25 mbps
                </option>
                <option
                  value="50 MBPS"
                  className="uppercase border border-primary-500 p-2"
                >
                  50 mbps
                </option>
                <option value="100 MBPS" className="uppercase">
                  100 mbps
                </option>
              </select>
              <div className="flex flex-row justify-end">
                <span className="text-red-500 text-sm font-semibold">
                  {!formik.values.plan && formik.errors.plan}
                </span>
              </div>
            </div>
            <div className="flex-1 m-1">
              <select
                name="months"
                className="w-full p-2 focus:outline-none bg-primary-100 border  rounded-md m-1 appearance-none"
                id="months"
                onChange={formik.handleChange("months")}
                onBlur={formik.handleBlur("months")}
              >
                <option value="" className="uppercase bg-primary-50">
                  Select months plan
                </option>
                <option
                  value="Monthly (1 month)"
                  className="uppercase bg-primary-50"
                >
                  Monthly (1 month)
                </option>
                <option
                  value="Querterly (3 months)"
                  className="uppercase bg-primary-50"
                >
                  Querterly (3 months)
                </option>
                <option
                  value="Half yearly (6 months)"
                  className="uppercase bg-primary-50"
                >
                  Half yearly (6 months)
                </option>
                <option
                  value="Yearly (12 months)"
                  className="uppercase bg-primary-50"
                >
                  Yearly (12 months)
                </option>
              </select>
              <div className="flex flex-row justify-end">
                <span className="text-red-500 text-sm font-semibold">
                  {!formik.values.months && formik.errors.months}
                </span>
              </div>
            </div>
            <div className="flex-1 m-1">
              <select
                name="type"
                className="w-full p-2 focus:outline-none bg-primary-100 border  rounded-md m-1 appearance-none"
                id="type"
                onChange={formik.handleChange("type")}
                onBlur={formik.handleBlur("type")}
                value={formik.values.type}
              >
                <option value="" className="uppercase bg-primary-50">
                  Select type of recharges
                </option>
                <option value="Renewal">Renewal</option>
                <option value="NC">NC</option>
              </select>
              <div className="flex flex-row justify-end">
                <span className="text-red-500 text-sm font-semibold">
                  {!formik.values.type && formik.errors.type}
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 m-1">
            <input
              type="text"
              name="plan_amount"
              placeholder="Enter plan amount"
              className="px-2 focus:outline-none focus:border focus:border-secondary-500 border-primary-500 border rounded-md py-2 w-full"
              id="plan_amount"
              onChange={formik.handleChange("plan_amount")}
              onBlur={formik.handleBlur("plan_amount")}
              value={formik.values.plan_amount}
            />
            <div className="flex flex-row justify-end">
              <span className="text-red-500 text-sm font-semibold">
                {!formik.values.id && formik.errors.id}
              </span>
            </div>
          </div>
          <div className="flex flex-row mt-3">
            <div className="flex-1 m-1 w-full">
              <input
                type="text"
                name="id"
                placeholder="Enter recharge date"
                className="px-2 focus:outline-none focus:border focus:border-secondary-500 border-primary-500 border rounded-md py-2 w-full"
                id="id"
                onChange={formik.handleChange("recharge_date")}
                onBlur={formik.handleBlur("recharge_date")}
                value={formik.values.recharge_date}
              />
              <div className="flex flex-row justify-end">
                <span className="text-red-500 text-sm font-semibold">
                  {!formik.values.recharge_date && formik.errors.recharge_date}
                </span>
              </div>
            </div>
            <div className="flex-1 m-1 w-full">
              <input
                type="text"
                name="id"
                placeholder="Enter renewal date"
                className="px-2 focus:outline-none focus:border focus:border-secondary-500 border-primary-500 border rounded-md py-2 w-full"
                id="id"
                onChange={formik.handleChange("renewal_date")}
                onBlur={formik.handleBlur("renewal_date")}
                value={formik.values.renewal_date}
              />
              <div className="flex flex-row justify-end">
                <span className="text-red-500 text-sm font-semibold">
                  {!formik.values.renewal_date && formik.errors.renewal_date}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-3">
            <div className="flex-1 m-1 w-full">
              <input
                type="text"
                name="balance"
                placeholder="Enter balance staus"
                className="px-2 focus:outline-none focus:border focus:border-secondary-500 border-primary-500 border rounded-md py-2 w-full"
                id="balance"
                onChange={formik.handleChange("balance")}
                onBlur={formik.handleBlur("balance")}
                value={formik.values.balance}
              />
              <div className="flex flex-row justify-end">
                <span className="text-red-500 text-sm font-semibold">
                  {!formik.values.months && formik.errors.months}
                </span>
              </div>
            </div>
            <div className="flex-1 m-1 w-full">
              <input
                type="text"
                name="router"
                placeholder="Enter router staus"
                className="px-2 focus:outline-none focus:border focus:border-secondary-500 border-primary-500 border rounded-md py-2 w-full"
                id="router"
                onChange={formik.handleChange("router")}
                onBlur={formik.handleBlur("router")}
                value={formik.values.router}
              />
              <div className="flex flex-row justify-end">
                <span className="text-red-500 text-sm font-semibold">
                  {!formik.values.router && formik.errors.router}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row  mt-3">
            <div className="flex-1 m-1 w-full">
              <input
                type="text"
                name="installation"
                placeholder="Enter installation staus"
                className="px-2 focus:outline-none focus:border focus:border-secondary-500 border-primary-500 border rounded-md py-2 w-full"
                id="installation"
                onChange={formik.handleChange("installation")}
                onBlur={formik.handleBlur("installation")}
                value={formik.values.installation}
              />
              <div className="flex flex-row justify-end">
                <span className="text-red-500 text-sm font-semibold">
                  {!formik.values.installation && formik.errors.installation}
                </span>
              </div>
            </div>
            <div className="flex-1 m-1 w-full">
              <input
                type="text"
                name="total"
                placeholder="Enter total"
                className="px-2 focus:outline-none focus:border focus:border-secondary-500 border-primary-500 border rounded-md py-2 w-full"
                id="total"
                onChange={formik.handleChange("total")}
                onBlur={formik.handleBlur("total")}
                value={formik.values.total}
              />
              <div className="flex flex-row justify-end">
                <span className="text-red-500 text-sm font-semibold">
                  {!formik.values.total && formik.errors.total}
                </span>
              </div>
            </div>
            <div className="flex-1 m-1 w-full">
              <select
                name="payment_mode"
                className="w-full p-2 focus:outline-none bg-primary-100 border  rounded-md m-1 appearance-none"
                id="payment_mode"
                onChange={formik.handleChange("payment_mode")}
                onBlur={formik.handleBlur("payment_mode")}
                value={formik.values.payment_mode}
              >
                <option value="" className="uppercase bg-primary-50">
                  Select payment mode
                </option>
                <option
                  value="Online (GPAY, PAYTM, OR UPI)"
                  className="uppercase bg-primary-50"
                >
                  Online (GPAY, PAYTM, OR UPI)
                </option>
                <option
                  value="Cash for recharge"
                  className="uppercase bg-primary-50"
                >
                  Cash for recharge
                </option>
              </select>
              <div className="flex flex-row justify-end">
                <span className="text-red-500 text-sm font-semibold">
                  {!formik.values.payment_mode && formik.errors.payment_mode}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-5 justify-end">
            <button
              onClick={(e) => {
                e.preventDefault();
                formik.submitForm();
              }}
              type="submit"
              className="px-5 rounded-sm py-2 bg-primary-500 text-white"
            >
              Submit data
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
