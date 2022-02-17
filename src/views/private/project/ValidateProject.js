import { string, object, ref } from "yup";

//const emailValidation = /^[a-zA-Z0-9_\\.]+@[a-zA-Z]+\.[a-zA-Z0-9\\.]+$/;

export const ValidateProject = object({
  prefix: string().required("กรุณาเลือกคำนำหน้าชื่อ"),
  projectName: string().required("กรุณากรอกชื่อ"),
  customerName: string().required("กรุณากรอกนามสกุล"),
  startDate: string().required("กรุณากรอกวันที่"),
  endDate: string().required("กรุณากรอกวันที่"),
  detail: string().required("กรุณากรอกข้อมูล"),
  projectStatus: string().required("กรุณากรอกข้อมูล"),
  // mobilePhone: string()
  //   .matches(/^[0-9]+$/, "กรุณาตรวจสอบเบอร์มือถืออีกครั้ง")
  //   .required("กรุณากรอกเบอร์โทร"),
  // address: string().required("กรุณากรอกที่อยู่"),
  // subDistrict: string().required("กรุณาเลือกตำบล"),
  // district: string().required("กรุณาเลือกอำเภอ"),
  // province: string().required("กรุณาเลือกจังหวัด"),
  // zipCode: string().required("กรุณากรอกรหัสไปรษณีย์"),

  // username: string()
  //   .required("กรุณากรอกอีเมล")
  //   .matches(emailValidation, "รูปแบบผู้ใช้งานไม่ถูกต้อง"),
});