import React, { useEffect, useState } from 'react';

const FinalReview = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const getAllFormData = () => {
      const formKeys = [
        'email', 'name', 'phone', 'country', 'program', 'team', 'existProgram',
        'hostingPlatform', 'hasDomain', 'domain', 'personalDomain', 'createdDomain',
        'profileHandle', 'profilePicture', 'plan'
      ];
      const allData = {};
      formKeys.forEach(key => {
        const data = localStorage.getItem(`signup-${key}`);
        if (data) {
          allData[key] = JSON.parse(data);
        }
      });
      return allData;
    };

    const data = getAllFormData();
    setFormData(data);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-6">Final Review</h1>

        {/* Personal Info */}
        <section className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
          <p><strong>First Name:</strong> {formData?.name?.firstName || '—'}</p>
          <p><strong>Last Name:</strong> {formData?.name?.lastName || '—'}</p>
          <p><strong>Phone:</strong> {formData?.phone?.phone || '—'}</p>
          <p><strong>Country:</strong> {formData?.phone?.country?.name || '—'}</p>
        </section>

        {/* Program Info */}
        <section className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Program Info</h2>
          <p><strong>Program Name:</strong> {formData?.program?.programName || '—'}</p>
          <p><strong>Existing Program:</strong> {formData?.existProgram?.hasExistingProgram ? 'Yes' : 'No'}</p>
        </section>

        {/* Team Members */}
        <section className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Team Members</h2>
          {formData?.team?.invites?.length > 0 ? (
            <ul className="space-y-2">
              {formData.team.invites.map((invite, idx) => (
                <li key={idx}>
                  <strong>{invite.role}:</strong> {invite.email}
                </li>
              ))}
            </ul>
          ) : (
            <p>—</p>
          )}
        </section>

        {/* Domain Setup */}
        <section className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Domain Setup</h2>
          <p><strong>Has Personal Domain:</strong> {formData?.hasDomain?.hasPersonalDomain ? 'Yes' : 'No'}</p>
          <p><strong>Personal Domain:</strong> {formData?.personalDomain?.personalDomain || '—'}</p>
          <p><strong>Hosting Platform:</strong> {formData?.hostingPlatform?.hostingPlatform || '—'}</p>
        </section>

        {/* Profile Handle */}
        <section className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <p><strong>Handle:</strong></p>
          <div className="break-words text-sm text-gray-300">
            {formData?.profileHandle?.handle || '—'}
          </div>
        </section>

        {/* Plan Info */}
        <section className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Plan</h2>
          <p><strong>Selected Plan:</strong> {formData?.plan?.selectedPlan || '—'}</p>
          <p><strong>Billing Cycle:</strong> {formData?.plan?.billingCycle || '—'}</p>
        </section>

        {/* Submit */}
        <div className="text-center mt-10">
          <button
            onClick={() => alert('Submission logic goes here')}
            className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition font-semibold"
          >
            Confirm & Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalReview;
