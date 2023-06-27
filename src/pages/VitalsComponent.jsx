// VitalsComponent.js

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchVitals } from "../features/userAction";

const VitalsComponent = ({ id, vitalsData, loading, error, fetchVitals }) => {
  useEffect(() => {
    fetchVitals(id);
  }, [id, fetchVitals]);

  return (
    <div>
      <h2>Client Vitals Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : vitalsData ? (
        <div>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-lg">
              <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                Team members
              </h3>
              <p className="text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
              <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                  <tr>
                    <th className="py-3 px-6">Time</th>
                    <th className="py-3 px-6">BP_ Systole</th>
                    <th className="py-3 px-6">BP_Diastole</th>
                    <th className="py-3 px-6">Pulse</th>
                    <th className="py-3 px-6">Temp</th>
                    <th className="py-3 px-6">Resp</th>
                    <th className="py-3 px-6">Pain_Score</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                  {vitalsData.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.activity_timing}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.activity_bp_systole}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.activity_bp_diastole}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.activity_pulse}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.activity_temp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.activity_resp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.activity_pain_score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* <p>Timing: {vitalsData.activity_timing}</p>
          <p>Systole: {vitalsData.activity_bp_systole}</p>
          <p>Diastole: {vitalsData.activity_bp_diastole}</p>
          <p>Temperature: {vitalsData.activity_temp}</p>
          <p>Pulse: {vitalsData.activity_pulse}</p>
          <p>Respiration: {vitalsData.activity_resp}</p>
          <p>Pain Score: {vitalsData.activity_pain_score}</p>          */}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  vitalsData: state.vitals.vitals,
  loading: state.vitals.loading,
  error: state.vitals.error,
});

const mapDispatchToProps = {
  fetchVitals,
};

export default connect(mapStateToProps, mapDispatchToProps)(VitalsComponent);
