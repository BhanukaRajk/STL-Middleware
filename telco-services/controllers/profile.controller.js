import Customer from "../models/customer.model.js";
import bcrypt from "bcrypt";

export const getCustomer = async (req, res) => {
  try {
    const { customer_id } = req.params;
    const customer = await Customer.findOne({ _id: customer_id });
    res.json(customer);
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

export const updateFirstName = async (req, res) => {
  try {
    const { customer_id } = req.params;
    const { firstName } = req.body;
    const customer = await Customer.findOneAndUpdate(
      { _id: customer_id },
      { first_name: firstName },
      { new: true }
    );
    res.status(200).json("Updated First Name!!!");
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

export const updateLastName = async (req, res) => {
  try {
    const { customer_id } = req.params;
    const { lastName } = req.body;
    const customer = await Customer.findOneAndUpdate(
      { _id: customer_id },
      { last_name: lastName },
      { new: true }
    );
    res.json("Updated Last Name!!!");
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

export const comparePassword = async (req, res) => {
  try {
    const { customer_id } = req.params;
    const { password } = req.body;
    const customer = await Customer.findOne({ _id: customer_id });

    bcrypt.compare(password, customer.password, (err, result) => {
      if (err) {
        res.json(false);
      } else if (result) {
        res.json(true);
      } else {
        res.json(false);
      }
    });
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

export const updateEmail = async (req, res) => {
  try {
    const { customer_id } = req.params;
    const { email } = req.body;
    const customer = await Customer.findOneAndUpdate(
      { _id: customer_id },
      { email },
      { new: true }
    );
    res.json("Updated Email!!!");
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { customer_id } = req.params;
    const { password } = req.body;
    const customer = await Customer.findOneAndUpdate(
      { _id: customer_id },
      { password: await hashPassword(password) },
      { new: true }
    );
    res.json("Updated to New Password!!!");
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
