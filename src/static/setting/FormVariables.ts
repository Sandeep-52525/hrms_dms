export const initialFields_State = {
  reportId: null,
  reportName: "",
  reportNumber: "",
  reportFrequency: 0,
  reportGroup: 0,
  typicalSource: 0,
  securityRisk: 0,
  useTPAName: false,
  applicableToTPARequest: 0,
  urlNameGrouping: 0,
  globalExpectedCompletionDate: "",
  binderPage: "",
  relevantToRACs: 0,
  auditEvidence: [],
  usersOfReport: [],
  identityRisk: false,
  reconApplicable: false,
  firstYearOnly: false,
  safeHarborNotApplicable: false,
  optional: false,
  active: false,
  usefulnessToInternalAudit: "",
  usefulnessToDOLRole: "",
  relevantToSponsorMonitoring: "",
  usefulnessToCPARole: "",
  usefulnessToSponsorRole: "",
  usefulnessToTPARole: "",
};

export const initialFieldsError_State = {
  reportName: false,
  reportFrequency: false,
  reportGroup: false,
  reportNumber: false,
  useTPAName: false,
  applicableToTPARequest: false,
  urlNameGrouping: false,
  globalExpectedCompletionDate: false,
  securityRisk: false,
  identityRisk: false,
  reconApplicable: false,
};