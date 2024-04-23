import axios from "axios";
import { toast } from "react-toastify";
import { getToken, removeCookies } from "@/utils/authFunctions";

const url = new URL(process.env.apidev_url!);

const getReportFrequency = async () => {
  url.pathname = "/SettingsReport/GetFrequency";
  try {
    const res = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (res.data.status) {
      return res.data.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (error: any) {
    toast.error("Error while fetching dropdown data.");
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/";
          return;
      }
    }
  }
};

const getReportGroup = async () => {
  url.pathname = "/ControlPanel/GetGroupTypes";
  try {
    const res = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (res.data.status) {
      return res.data.data.map(
        (item: { id: number; reportGroupTypes: string }) => ({
          label: item.reportGroupTypes,
          value: item.id,
        })
      );
    } else {
      toast.error(res.data.message);
    }
  } catch (error: any) {
    toast.error("Error while fetching dropdown data.");
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/";
          return;
      }
    }
  }
};

const getTypicalSource = async () => {
  url.pathname = "/SettingsReport/GetTypicalSource";
  try {
    const res = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (res.data.status) {
      return res.data.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (error: any) {
    toast.error("Error while fetching dropdown data.");
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/";
          return;
      }
    }
  }
};

const getSecurityRisk = async () => {
  url.pathname = "/SettingsReport/GetSecurityRisk";
  try {
    const res = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (res.data.status) {
      return res.data.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (error: any) {
    toast.error("Error while fetching dropdown data.");
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/";
          return;
      }
    }
  }
};

const getApplicableToTPARequest = async () => {
  url.pathname = "/SettingsReport/GetApplicabilityToTPARequest";
  try {
    const res = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (res.data.status) {
      return res.data.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (error: any) {
    toast.error("Error while fetching dropdown data.");
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/";
          return;
      }
    }
  }
};

const getURLNameGrouping = async () => {
  url.pathname = "/SettingsReport/GetURLNameGrouping";
  try {
    const res = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (res.data.status) {
      return res.data.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (error: any) {
    toast.error("Error while fetching dropdown data.");
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/";
          return;
      }
    }
  }
};

const getRelevanttoRACs = async () => {
  url.pathname = "/SettingsReport/GetRelevantToRAC";
  try {
    const res = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (res.data.status) {
      return res.data.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (error: any) {
    toast.error("Error while fetching dropdown data.");
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/";
          return;
      }
    }
  }
};

const getAuditEvidence = async () => {
  url.pathname = "/SettingsReport/GetAuditEvidence";
  try {
    const res = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (res.data.status) {
      return res.data.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (error: any) {
    toast.error("Error while fetching dropdown data.");
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/";
          return;
      }
    }
  }
};

const getUsersofReport = async () => {
  url.pathname = "/SettingsReport/GetUserOfReport";
  try {
    const res = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (res.data.status) {
      return res.data.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (error: any) {
    toast.error("Error while fetching dropdown data.");
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/";
          return;
      }
    }
  }
};

const getTPADropdown = async () => {
  url.pathname = "/AuditReport/GetTPA";
  try {
    const res = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (res.data.status) {
      return res.data.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (error: any) {
    toast.error("Error while fetching dropdown data.");
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/";
          return;
      }
    }
  }
};

const getLevelDropdown = async (tpaCompanyMasterId: number) => {
  url.pathname = "/AuditReport/GetLevel";
  try {
    const res = await axios.post(
      url.toString(),
      {
        tpaCompanyMasterId: tpaCompanyMasterId,
        level: null,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    if (res.data.status) {
      return res.data.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (error: any) {
    toast.error("Error while fetching dropdown data.");
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/";
          return;
      }
    }
  }
};

const getVersionDropdown = async (
  tpaCompanyMasterId: number,
  level: number
) => {
  url.pathname = "/AuditReport/GetVersion";
  try {
    const res = await axios.post(
      url.toString(),
      {
        tpaCompanyMasterId: tpaCompanyMasterId,
        level: level.toString(),
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    if (res.data.status) {
      return res.data.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (error: any) {
    toast.error("Error while fetching dropdown data.");
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/";
          return;
      }
    }
  }
};

export {
  getReportFrequency,
  getReportGroup,
  getTypicalSource,
  getSecurityRisk,
  getApplicableToTPARequest,
  getURLNameGrouping,
  getRelevanttoRACs,
  getAuditEvidence,
  getUsersofReport,
  getTPADropdown,
  getLevelDropdown,
  getVersionDropdown,
};
