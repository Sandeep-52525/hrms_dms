// import "./styles.css";
// import { ReactNode, useEffect, useState } from "react";
// import {
//   Autocomplete,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   TextField,
// } from "@mui/material";
// import dayjs from "dayjs";
// import { AES, enc } from "crypto-js";
// import { toast } from "react-toastify";
// import Loader from "@/components/common/Loader";
// import { SECRET_KEY } from "@/static/commonVariables";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// import {
//   getApplicableToTPARequest,
//   getAuditEvidence,
//   getRelevanttoRACs,
//   getReportFrequency,
//   getReportGroup,
//   getSecurityRisk,
//   getTypicalSource,
//   getURLNameGrouping,
//   getUsersofReport,
// } from "@/api/dropdownAPI";
// import {
//   DrawerHeaderType,
//   DrawerFormType,
//   OptionType,
//   DrawerFooterType,
//   FieldsType,
//   FieldsErrorType,
// } from "@/types/ReportDrawer";
// import {
//   initialFieldsError_State,
//   initialFields_State,
// } from "@/static/setting/FormVariables";
// import { callAPIwithHeaders, callAPIwithParams } from "@/api/commonAPI";

// //sub-components
// const DrawerCard = ({ children }: { children: ReactNode }) => {
//   return (
//     <div
//       style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
//       className="w-full rounded-lg"
//     >
//       {children}
//     </div>
//   );
// };

// const DrawerHeader = ({ action, reportName, handleBack }: DrawerHeaderType) => {
//   return (
//     <div className="pl-4 top-0 w-full !h-14 flex gap-1 items-center border-b border-b-black rounded-t-lg">
//       <div className="cursor-pointer" onClick={handleBack}>
//         <ArrowBackIosIcon fontSize="large" />
//       </div>
//       <div className="font-medium text-lg capitalize">
//         {action}&nbsp;{!!reportName ? `| ${reportName}` : ""}
//       </div>
//     </div>
//   );
// };

// const DrawerForm = ({
//   fields,
//   fieldsError,
//   handleForm,
//   handleFieldsState,
//   handleFieldErrorsState,
//   reportFrequencyDropdown,
//   reportGroupDropdown,
//   typicalSourceDropdown,
//   securityRiskDropdown,
//   applicableToTPARequestDropdown,
//   urlNameGroupingDropdown,
//   relevanttoRACsDropdown,
//   auditEvidenceDropdown,
//   usersofReportDropdown,
// }: DrawerFormType) => {
//   const today = new Date();
//   const currentYear = today.getFullYear();
//   const [formattedDate, setFormattedDate] = useState<any>(null);

//   const getObj = (dropDown: OptionType[], id: number) => {
//     return dropDown.filter((item: OptionType) => item.value === id)[0];
//   };

//   const getObjArray = (dropDown: OptionType[], idsArray: number[]) => {
//     return dropDown.filter((item: OptionType) => idsArray.includes(item.value));
//   };

//   useEffect(() => {
//     if (!!fields.globalExpectedCompletionDate) {
//       setFormattedDate(dayjs(fields.globalExpectedCompletionDate));
//     }
//   }, []);

//   return (
//     <div
//       style={{
//         height: `calc(100vh - 48px - 66px - 56px - 56px - 36px)`, // padding(48px) + header(66px) + Form header&footer(56px) + footer(36px)
//       }}
//       className="w-full px-8 py-5 flex flex-col gap-5 overflow-scroll"
//     >
//       <div className="grid grid-cols-3">
//         <TextField
//           required
//           id="reportName"
//           className="w-[85%]"
//           label="Report Name"
//           variant="outlined"
//           onChange={handleForm}
//           value={fields.reportName}
//           error={fieldsError.reportName}
//           helperText={fieldsError.reportName ? "Field is required." : ""}
//         />
//         <TextField
//           required
//           id="reportNumber"
//           className="w-[85%]"
//           label="Report Number"
//           variant="outlined"
//           onChange={handleForm}
//           value={fields.reportNumber}
//           error={fieldsError.reportNumber}
//           helperText={fieldsError.reportNumber ? "Field is required." : ""}
//         />
//         <Autocomplete
//           disablePortal
//           disableClearable
//           id="reportFrequency"
//           options={reportFrequencyDropdown}
//           sx={{
//             width: "85%",
//           }}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="Report Frequency"
//               error={fieldsError.reportFrequency}
//               helperText={
//                 fieldsError.reportFrequency ? "Field is required." : ""
//               }
//             />
//           )}
//           onChange={handleForm}
//           value={getObj(reportFrequencyDropdown, fields.reportFrequency)}
//         />
//       </div>
//       <Autocomplete
//         multiple
//         disablePortal
//         disableClearable
//         disableCloseOnSelect
//         id="auditEvidence"
//         options={auditEvidenceDropdown}
//         sx={{
//           width: "95%",
//         }}
//         renderInput={(params) => (
//           <TextField {...params} label="PCAOB Audit Evidence" />
//         )}
//         onChange={(e, record: OptionType[]) => {
//           handleFieldsState({
//             ...fields,
//             auditEvidence:
//               record.length > 0
//                 ? record.map((item: OptionType) => item.value)
//                 : [],
//           });
//         }}
//         value={getObjArray(auditEvidenceDropdown, fields.auditEvidence)}
//       />
//       <div className="grid grid-cols-3">
//         <Autocomplete
//           disablePortal
//           disableClearable
//           id="reportGroup"
//           options={reportGroupDropdown}
//           sx={{
//             width: "85%",
//           }}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="Report Group"
//               error={fieldsError.reportGroup}
//               helperText={fieldsError.reportGroup ? "Field is required." : ""}
//             />
//           )}
//           onChange={handleForm}
//           value={getObj(reportGroupDropdown, fields.reportGroup)}
//         />
//         <Autocomplete
//           disablePortal
//           disableClearable
//           id="typicalSource"
//           options={typicalSourceDropdown}
//           sx={{
//             width: "85%",
//           }}
//           renderInput={(params) => (
//             <TextField {...params} label="Typical Source" />
//           )}
//           onChange={handleForm}
//           value={getObj(typicalSourceDropdown, fields.typicalSource)}
//         />
//         <Autocomplete
//           disablePortal
//           disableClearable
//           id="securityRisk"
//           options={securityRiskDropdown}
//           sx={{
//             width: "85%",
//           }}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="Security Risk"
//               error={fieldsError.securityRisk}
//               helperText={fieldsError.securityRisk ? "Field is required." : ""}
//             />
//           )}
//           onChange={handleForm}
//           value={getObj(securityRiskDropdown, fields.securityRisk)}
//         />
//       </div>
//       <div className="grid grid-cols-3">
//         <FormControlLabel
//           className="whitespace-nowrap"
//           sx={{
//             color: fieldsError.useTPAName ? "red" : "",
//           }}
//           control={
//             <Checkbox
//               id="useTPAName"
//               sx={{
//                 "& .MuiSvgIcon-root": {
//                   height: "24px !important",
//                   color: fieldsError.useTPAName ? "red" : "",
//                 },
//               }}
//               onChange={handleForm}
//               defaultChecked={fields.useTPAName}
//             />
//           }
//           label="Use TPA name for report when an override"
//         />
//       </div>
//       <div className="grid grid-cols-3">
//         <Autocomplete
//           disablePortal
//           disableClearable
//           id="applicableToTPARequest"
//           options={applicableToTPARequestDropdown}
//           sx={{
//             width: "85%",
//           }}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="Applicability to TPA Request"
//               error={fieldsError.applicableToTPARequest}
//               helperText={
//                 fieldsError.applicableToTPARequest ? "Field is required" : ""
//               }
//             />
//           )}
//           onChange={handleForm}
//           value={getObj(
//             applicableToTPARequestDropdown,
//             fields.applicableToTPARequest
//           )}
//         />
//         <Autocomplete
//           disablePortal
//           disableClearable
//           id="urlNameGrouping"
//           options={urlNameGroupingDropdown}
//           sx={{
//             width: "85%",
//           }}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="URL Name Grouping"
//               error={fieldsError.urlNameGrouping}
//               helperText={
//                 fieldsError.urlNameGrouping ? "Field is required" : ""
//               }
//             />
//           )}
//           onChange={handleForm}
//           value={getObj(urlNameGroupingDropdown, fields.urlNameGrouping)}
//         />
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <div className="flex flex-col">
//             <DatePicker
//               sx={{
//                 "& .MuiOutlinedInput-root":
//                   fieldsError.globalExpectedCompletionDate
//                     ? {
//                         color: "red !important",
//                         border: "1px solid red !important",
//                       }
//                     : {},
//               }}
//               views={["month", "day"]}
//               className="w-[85%]"
//               value={formattedDate}
//               onChange={(e) => {
//                 const fullDate = dayjs(e).format("MM/DD/YYYY");
//                 const dateSplits = fullDate.split("/");
//                 const year = currentYear;
//                 const month = dateSplits[0];
//                 const date = dateSplits[1];
//                 const formattedDate = `${year}-${month}-${date}`;
//                 handleFieldErrorsState(initialFieldsError_State);
//                 handleFieldsState({
//                   ...fields,
//                   globalExpectedCompletionDate: formattedDate,
//                 });
//               }}
//             />
//             {fieldsError.globalExpectedCompletionDate && (
//               <span className="mt-[3px] mx-[14px] text-xs font-normal text-[#d32f2f]">
//                 Field is required.
//               </span>
//             )}
//           </div>
//         </LocalizationProvider>
//       </div>
//       <div className="grid grid-cols-3">
//         <TextField
//           className="w-[85%]"
//           id="binderPage"
//           label="Binder Page"
//           variant="outlined"
//           onChange={handleForm}
//         />
//         <Autocomplete
//           disablePortal
//           disableClearable
//           id="relevantToRACs"
//           options={relevanttoRACsDropdown}
//           sx={{
//             width: "85%",
//           }}
//           renderInput={(params) => (
//             <TextField {...params} label="Relevant to RACs" />
//           )}
//           onChange={handleForm}
//           value={getObj(relevanttoRACsDropdown, fields.relevantToRACs)}
//         />
//       </div>
//       <Autocomplete
//         multiple
//         disablePortal
//         disableClearable
//         disableCloseOnSelect
//         id="usersOfReport"
//         options={usersofReportDropdown}
//         sx={{
//           width: "95%",
//         }}
//         renderInput={(params) => (
//           <TextField {...params} label="User(s) of Report" />
//         )}
//         onChange={(e, record: OptionType[]) =>
//           handleFieldsState({
//             ...fields,
//             usersOfReport:
//               record.length > 0
//                 ? record.map((item: OptionType) => item.value)
//                 : [],
//           })
//         }
//         value={getObjArray(usersofReportDropdown, fields.usersOfReport)}
//       />
//       <div className="grid grid-cols-3">
//         <FormControlLabel
//           sx={{
//             color: fieldsError.identityRisk ? "red" : "",
//           }}
//           control={
//             <Checkbox
//               sx={{
//                 "& .MuiSvgIcon-root": {
//                   height: "24px !important",
//                   color: fieldsError.identityRisk ? "red" : "",
//                 },
//               }}
//               id="identityRisk"
//               onChange={handleForm}
//               defaultChecked={fields.identityRisk}
//             />
//           }
//           label="Identity Risk"
//         />
//         <FormControlLabel
//           sx={{
//             color: fieldsError.reconApplicable ? "red" : "",
//           }}
//           control={
//             <Checkbox
//               sx={{
//                 "& .MuiSvgIcon-root": {
//                   height: "24px !important",
//                   color: fieldsError.reconApplicable ? "red" : "",
//                 },
//               }}
//               id="reconApplicable"
//               onChange={handleForm}
//               defaultChecked={fields.reconApplicable}
//             />
//           }
//           label="Used in Reconciliation Connection"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               sx={{ "& .MuiSvgIcon-root": { height: "24px !important" } }}
//               id="firstYearOnly"
//               onChange={handleForm}
//               defaultChecked={fields.firstYearOnly}
//             />
//           }
//           label="First Year Only"
//         />
//       </div>
//       <div className="grid grid-cols-3">
//         <FormControlLabel
//           control={
//             <Checkbox
//               sx={{ "& .MuiSvgIcon-root": { height: "24px !important" } }}
//               id="safeHarborNotApplicable"
//               onChange={handleForm}
//               defaultChecked={fields.safeHarborNotApplicable}
//             />
//           }
//           label="Safe Harbor Not Applicable"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               id="optional"
//               onChange={handleForm}
//               defaultChecked={fields.optional}
//               sx={{ "& .MuiSvgIcon-root": { height: "24px !important" } }}
//             />
//           }
//           label="Optional"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               id="active"
//               onChange={handleForm}
//               defaultChecked={fields.active}
//               sx={{ "& .MuiSvgIcon-root": { height: "24px !important" } }}
//             />
//           }
//           label="Active"
//         />
//       </div>
//       <div className="grid grid-cols-2">
//         <div className="w-[90%] flex flex-col">
//           <label htmlFor="usefulnessToInternalAudit" className="text-sm">
//             Usefulness to Internal Audit&apos;s role
//           </label>
//           <textarea
//             placeholder="Enter text here"
//             className="w-full p-2 text-sm border resize-none outline-none rounded-md hover:border-black"
//             rows={4}
//             id="usefulnessToInternalAudit"
//             onChange={handleForm}
//             value={fields.usefulnessToInternalAudit}
//           ></textarea>
//         </div>
//         <div className="w-[90%] flex flex-col">
//           <label htmlFor="usefulnessToDOLRole" className="text-sm">
//             Usefulness to DOL&apos;s role
//           </label>
//           <textarea
//             placeholder="Enter text here"
//             className="w-full p-2 text-sm border resize-none outline-none rounded-md hover:border-black"
//             rows={4}
//             id="usefulnessToDOLRole"
//             onChange={handleForm}
//             value={fields.usefulnessToDOLRole}
//           ></textarea>
//         </div>
//       </div>
//       <div className="grid grid-cols-2">
//         <div className="w-[90%] flex flex-col">
//           <label htmlFor="relevantToSponsorMonitoring" className="text-sm">
//             Relevant to Sponsor Monitoring
//           </label>
//           <textarea
//             placeholder="Enter text here"
//             className="w-full p-2 text-sm border resize-none outline-none rounded-md hover:border-black"
//             onChange={handleForm}
//             id="relevantToSponsorMonitoring"
//             rows={4}
//             value={fields.relevantToSponsorMonitoring}
//           ></textarea>
//         </div>
//         <div className="w-[90%] flex flex-col">
//           <label htmlFor="usefulnessToCPARole" className="text-sm">
//             Usefulness to CPA&apos;s role
//           </label>
//           <textarea
//             placeholder="Enter text here"
//             className="w-full p-2 text-sm border resize-none outline-none rounded-md hover:border-black"
//             id="usefulnessToCPARole"
//             onChange={handleForm}
//             rows={4}
//             value={fields.usefulnessToCPARole}
//           ></textarea>
//         </div>
//       </div>
//       <div className="grid grid-cols-2">
//         <div className="w-[90%] flex flex-col">
//           <label htmlFor="usefulnessToSponsorRole" className="text-sm">
//             Usefulness to Sponsors&apos; role
//           </label>
//           <textarea
//             placeholder="Enter text here"
//             className="w-full p-2 text-sm border resize-none outline-none rounded-md hover:border-black"
//             id="usefulnessToSponsorRole"
//             onChange={handleForm}
//             rows={4}
//             value={fields.usefulnessToSponsorRole}
//           ></textarea>
//         </div>
//         <div className="w-[90%] flex flex-col">
//           <label htmlFor="usefulnessToTPARole" className="text-sm">
//             Usefulness to TPA&apos;s role
//           </label>
//           <textarea
//             placeholder="Enter text here"
//             className="w-full p-2 text-sm border resize-none outline-none rounded-md hover:border-black"
//             onChange={handleForm}
//             id="usefulnessToTPARole"
//             rows={4}
//             value={fields.usefulnessToTPARole}
//           ></textarea>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DrawerFooter = ({ onCancel, onSave }: DrawerFooterType) => {
//   return (
//     <div className="bottom-0 w-full !h-14 pr-8 flex gap-4 items-center justify-end border-t rounded-b-lg">
//       <Button variant="outlined" onClick={onCancel}>
//         cancel
//       </Button>
//       <Button variant="contained" className="!bg-[#223E99]" onClick={onSave}>
//         save
//       </Button>
//     </div>
//   );
// };

// //main component
// const ReportDrawer = () => {
//   const router = useRouter();
//   const query = usePathname();
//   const getToken = useSearchParams();

//   const url = query.split("/");
//   const action = url[url.length - 1];
//   const decodedId =
//     action === "create" ? "" : decodeURIComponent(getToken.get("reportId")!);
//   const [reportName, setReportName] = useState<string>("");
//   const [loaded, setLoaded] = useState<boolean>(false);
//   const [fields, setFields] = useState<FieldsType>(initialFields_State);
//   const [fieldsError, setFieldsError] = useState<FieldsErrorType>(
//     initialFieldsError_State
//   );
//   const [reportFrequencyDropdown, setReportFrequencyDropdown] = useState<
//     OptionType[]
//   >([]);
//   const [reportGroupDropdown, setReportGroupDropdown] = useState<OptionType[]>(
//     []
//   );
//   const [typicalSourceDropdown, setTypicalSourceDropdown] = useState<
//     OptionType[]
//   >([]);
//   const [securityRiskDropdown, setSecurityRiskDropdown] = useState<
//     OptionType[]
//   >([]);
//   const [applicableToTPARequestDropdown, setApplicableToTPARequestDropdown] =
//     useState<OptionType[]>([]);
//   const [urlNameGroupingDropdown, setURLNameGroupingDropdown] = useState<
//     OptionType[]
//   >([]);
//   const [relevanttoRACsDropdown, setRelevanttoRACsDropdown] = useState<
//     OptionType[]
//   >([]);
//   const [auditEvidenceDropdown, setAuditEvidenceDropdown] = useState<
//     OptionType[]
//   >([]);
//   const [usersofReportDropdown, setUsersofReportDropdown] = useState<
//     OptionType[]
//   >([]);

//   const handleFields = (e: any, record: any) => {
//     if (e.target.id === "reportNumber" && e.target.value.length > 3) {
//       return;
//     }
//     if (e.target.id === "reportNumber" && !/^[0-9]+$|^$/.test(e.target.value)) {
//       return;
//     }

//     setFields({
//       ...fields,
//       [e.target.id.split("-")[0]]:
//         e.target.type.toLowerCase() === "checkbox"
//           ? e.target.checked
//           : !!record
//           ? record.value
//           : e.target.value,
//     });
//     setFieldsError(initialFieldsError_State);
//   };

//   const validate = () => {
//     const {
//       reportName,
//       reportFrequency,
//       reportGroup,
//       reportNumber,
//       // useTPAName,
//       applicableToTPARequest,
//       urlNameGrouping,
//       globalExpectedCompletionDate,
//       securityRisk,
//       // identityRisk,
//       // reconApplicable,
//     } = fields;
//     if (!reportName) {
//       setFieldsError({ ...fieldsError, reportName: true });
//       return false;
//     }
//     if (!reportNumber) {
//       setFieldsError({ ...fieldsError, reportNumber: true });
//       return false;
//     }
//     if (!reportFrequency) {
//       setFieldsError({ ...fieldsError, reportFrequency: true });
//       return false;
//     }
//     if (!reportGroup) {
//       setFieldsError({ ...fieldsError, reportGroup: true });
//       return false;
//     }
//     if (!securityRisk) {
//       setFieldsError({ ...fieldsError, securityRisk: true });
//       return false;
//     }
//     // if (!useTPAName) {
//     //   setFieldsError({ ...fieldsError, useTPAName: true });
//     //   return false;
//     // }
//     if (!applicableToTPARequest) {
//       setFieldsError({ ...fieldsError, applicableToTPARequest: true });
//       return false;
//     }
//     if (!urlNameGrouping) {
//       setFieldsError({ ...fieldsError, urlNameGrouping: true });
//       return false;
//     }
//     if (!globalExpectedCompletionDate) {
//       setFieldsError({ ...fieldsError, globalExpectedCompletionDate: true });
//       return false;
//     }
//     // if (!identityRisk) {
//     //   setFieldsError({ ...fieldsError, identityRisk: true });
//     //   return false;
//     // }
//     // if (!reconApplicable) {
//     //   setFieldsError({ ...fieldsError, reconApplicable: true });
//     //   return false;
//     // }
//     return true;
//   };

//   const handleSave = async () => {
//     if (validate()) {
//       setLoaded(false);
//       const body = {
//         reportId: fields.reportId,
//         reportName: fields.reportName,
//         reportNumber: parseInt(fields.reportNumber.toString()),
//         reportFrequency: fields.reportFrequency,
//         reportGroup: fields.reportGroup,
//         typicalSource: !!fields.typicalSource ? fields.typicalSource : null,
//         securityRisk: fields.securityRisk,
//         useTPANameWhenRequesting: fields.useTPAName,
//         applicabilitytoTPARequest: fields.applicableToTPARequest,
//         urlNameGrouping: fields.urlNameGrouping,
//         globalExpectedCompletionDate: `${fields.globalExpectedCompletionDate}T00:00:00.000Z`,
//         binderRefNo: fields.binderPage,
//         relevanttoRACs: !!fields.relevantToRACs ? fields.relevantToRACs : null,
//         auditEvidenceList:
//           fields.auditEvidence.length > 0 ? fields.auditEvidence : null,
//         usersOfReportList:
//           fields.usersOfReport.length > 0 ? fields.usersOfReport : null,
//         identityRisk: fields.identityRisk,
//         reconApplicable: fields.reconApplicable,
//         firstYearOnly: fields.firstYearOnly,
//         safeHarborNotApplicable: fields.safeHarborNotApplicable,
//         optional: fields.optional,
//         active: fields.active,
//         usefulnesstoInternalAuditsRole: !!fields.usefulnessToInternalAudit
//           ? fields.usefulnessToInternalAudit
//           : null,
//         usefulnesstoDOLsrole: !!fields.usefulnessToDOLRole
//           ? fields.usefulnessToDOLRole
//           : null,
//         relevanttoSponsorMonitoring: !!fields.relevantToSponsorMonitoring
//           ? fields.relevantToSponsorMonitoring
//           : null,
//         usefulnesstoCPAsRole: !!fields.usefulnessToCPARole
//           ? fields.usefulnessToCPARole
//           : null,
//         usefulnesstoSPonsorsRole: !!fields.usefulnessToSponsorRole
//           ? fields.usefulnessToSponsorRole
//           : null,
//         usefulnesstoTPAsRole: !!fields.usefulnessToTPARole
//           ? fields.usefulnessToTPARole
//           : null,
//       };

//       const callBack = (status: boolean, message: string) => {
//         if (status) {
//           setLoaded(true);
//           handleCancel();
//           toast.success(message);
//         } else {
//           setLoaded(true);
//           toast.error(message);
//         }
//       };

//       callAPIwithHeaders(
//         "/SettingsReport/AddUpdateReports",
//         "post",
//         callBack,
//         body
//       );
//     }
//   };

//   const handleCancel = () => {
//     setLoaded(false);
//     setFields(initialFields_State);
//     setFieldsError(initialFieldsError_State);
//     router.push("/admin/setting");
//   };

//   const getReportById = async (reportId: number) => {
//     const callBack = (status: boolean, message: string, data: any) => {
//       if (status) {
//         const reportObj = data.length > 0 ? data[0] : undefined;
//         setReportName(reportObj.reportName ?? "");
//         setFields({
//           ...fields,
//           reportId: reportObj.reportId,
//           reportName: reportObj.reportName,
//           reportNumber: reportObj.reportNumber,
//           reportFrequency: !!reportObj.reportFrequency
//             ? reportObj.reportFrequency
//             : "",
//           reportGroup: !!reportObj.reportGroup ? reportObj.reportGroup : "",
//           typicalSource: !!reportObj.typicalSource
//             ? reportObj.typicalSource
//             : "",
//           securityRisk: !!reportObj.securityRisk ? reportObj.securityRisk : "",
//           useTPAName: reportObj.useTPANameWhenRequesting,
//           applicableToTPARequest: !!reportObj.applicabilitytoTPARequest
//             ? reportObj.applicabilitytoTPARequest
//             : "",
//           urlNameGrouping: !!reportObj.urlNameGrouping
//             ? reportObj.urlNameGrouping
//             : "",
//           globalExpectedCompletionDate: !!reportObj.globalExpectedCompletionDate
//             ? reportObj.globalExpectedCompletionDate.split("T")[0]
//             : null,
//           binderPage: reportObj.binderRefNo,
//           relevantToRACs: !!reportObj.relevanttoRACs
//             ? reportObj.relevanttoRACs
//             : "",
//           auditEvidence: !!reportObj.auditEvidenceList
//             ? reportObj.auditEvidenceList
//             : "",
//           usersOfReport: !!reportObj.usersOfReportList
//             ? reportObj.usersOfReportList
//             : "",
//           identityRisk: reportObj.identityRisk,
//           reconApplicable: reportObj.reconApplicable,
//           firstYearOnly: reportObj.firstYearOnly,
//           safeHarborNotApplicable: reportObj.safeHarborNotApplicable,
//           optional: reportObj.optional,
//           active: reportObj.active,
//           usefulnessToInternalAudit:
//             reportObj.usefulnesstoInternalAuditsRole ?? "",
//           usefulnessToDOLRole: reportObj.usefulnesstoDOLsrole ?? "",
//           relevantToSponsorMonitoring:
//             reportObj.relevanttoSponsorMonitoring ?? "",
//           usefulnessToCPARole: reportObj.usefulnesstoCPAsRole ?? "",
//           usefulnessToSponsorRole: reportObj.usefulnesstoSPonsorsRole ?? "",
//           usefulnessToTPARole: reportObj.usefulnesstoTPAsRole ?? "",
//         });
//       } else {
//         router.push("/admin/setting");
//       }
//     };

//     callAPIwithParams(
//       "/SettingsReport/GetReportsById",
//       "get",
//       callBack,
//       {},
//       { name: "ReportId", value: reportId.toString() }
//     );
//   };

//   useEffect(() => {
//     //Dropdown API calls
//     const dropdownAPICall = async () => {
//       setReportFrequencyDropdown(await getReportFrequency());
//       setReportGroupDropdown(await getReportGroup());
//       setTypicalSourceDropdown(await getTypicalSource());
//       setSecurityRiskDropdown(await getSecurityRisk());
//       setApplicableToTPARequestDropdown(await getApplicableToTPARequest());
//       setURLNameGroupingDropdown(await getURLNameGrouping());
//       setRelevanttoRACsDropdown(await getRelevanttoRACs());
//       setAuditEvidenceDropdown(await getAuditEvidence());
//       setUsersofReportDropdown(await getUsersofReport());
//     };
//     dropdownAPICall();

//     if (action === "edit") {
//       const decryptedReportId = AES.decrypt(decodedId, SECRET_KEY).toString(
//         enc.Utf8
//       );

//       if (!decryptedReportId) {
//         toast.error("Error while fetching data");
//         router.push("/admin/setting");
//       } else {
//         getReportById(parseInt(decryptedReportId));
//       }
//     }
//     setTimeout(() => setLoaded(true), 1000);
//   }, []);

//   if (!loaded) return <Loader />;
//   if (loaded)
//     return (
//       <DrawerCard>
//         <DrawerHeader
//           reportName={!!reportName ? reportName : undefined}
//           action={action}
//           handleBack={handleCancel}
//         />
//         <DrawerForm
//           fields={fields}
//           fieldsError={fieldsError}
//           reportFrequencyDropdown={reportFrequencyDropdown}
//           reportGroupDropdown={reportGroupDropdown}
//           typicalSourceDropdown={typicalSourceDropdown}
//           securityRiskDropdown={securityRiskDropdown}
//           applicableToTPARequestDropdown={applicableToTPARequestDropdown}
//           urlNameGroupingDropdown={urlNameGroupingDropdown}
//           relevanttoRACsDropdown={relevanttoRACsDropdown}
//           auditEvidenceDropdown={auditEvidenceDropdown}
//           usersofReportDropdown={usersofReportDropdown}
//           handleForm={handleFields}
//           handleFieldsState={setFields}
//           handleFieldErrorsState={setFieldsError}
//         />
//         <DrawerFooter onSave={handleSave} onCancel={handleCancel} />
//       </DrawerCard>
//     );
// };

// export default ReportDrawer;
