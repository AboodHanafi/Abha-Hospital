import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BasicTable from "../../components/table";
import { vitalSignsThunk } from "../../redux/features/auth/authActions";

const VitalSigns = () => {
  const dispatch = useDispatch();
  const patientCode = localStorage.getItem("patientCode");
  const vitalSignsData = async () => {
    try {
      const response = await axios.get(
        "http://aiph.me:8000/api/patient/labReports?patientCode=0/372081&pageNo=1&offset=1&rows=7&lang=AR"
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // vitalSignsData();
    dispatch(vitalSignsThunk());
  }, []);

  return <BasicTable />;
};

export default VitalSigns;
