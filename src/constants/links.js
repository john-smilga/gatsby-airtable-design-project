import React from "react"
import { FaCcStripe, FaCreditCard, FaAlipay } from "react-icons/fa"
export default [
  {
    page: "products",
    label: "payments",
    url: `/products/payments`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "products",
    label: "terminal",
    url: `/products/terminal`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "products",
    label: "connect",
    url: `/products/connect`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "products",
    label: "billing",
    url: `/products/billing`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "developers",
    label: "documentation",
    url: `/developers/documentation`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "developers",
    label: "libraries",
    url: `/developers/libraries`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "developers",
    label: "plugins",
    url: `/developers/plugins`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "company",
    label: "jobs",
    url: `/company/jobs`,
    icon: <FaCcStripe className="icon" />,
  },
  {
    page: "company",
    label: "customers",
    url: `/company/customers`,
    icon: <FaCcStripe className="icon" />,
  },
]
