import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../components/table";
import { vitalSignsThunk } from "../../redux/features/patientData/patintActions";

function createData(id, clinic, doctor, date, time, notes) {
  return { id, clinic, doctor, date, time, notes };
}

const VitalSigns = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.vitalSigns.patientData);

  const rows = patient.map((item) => {
    const date = item.vitalSignDate.split(" ");
    return createData(
      item.vitalSignId,
      item.clinic.clinicName,
      item.doctor.doctorName,
      date[0],
      date[1],
      item.notes
    );
  });

  useEffect(() => {
    dispatch(vitalSignsThunk());
  }, []);

  return <BasicTable rows={rows} />;
};

export default VitalSigns;
