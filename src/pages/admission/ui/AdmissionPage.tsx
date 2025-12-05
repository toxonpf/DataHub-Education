import { CheckCircle2, Download } from 'lucide-react';

const AdmissionPage = () => (
  <div className="max-w-4xl mx-auto py-4">
    <div className="text-center mb-10">
      <h3 className="text-2xl font-bold text-gray-900">Admission 2024</h3>
      <p className="text-gray-500 mt-2">Five clear steps to join the program.</p>
    </div>

    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
      {[
        { title: 'Submit application online', date: '1-30 June', desc: 'Create a profile and upload documents.' },
        { title: 'Testing / Interview', date: 'July', desc: 'Pass entrance exams or interview depending on the program.' },
        { title: 'Grant competition', date: '1-10 August', desc: 'Take part in the state or university grant competition.' },
        { title: 'Enrollment', date: '25 August', desc: 'Sign the contract and get access to the student portal.' },
      ].map((step, idx) => (
        <div
          key={idx}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            {idx === 0 ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : <div className="w-3 h-3 bg-gray-300 rounded-full" />}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-gray-900">{step.title}</span>
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">{step.date}</span>
            </div>
            <p className="text-gray-500 text-sm">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 flex justify-center gap-4">
      <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
        <Download className="w-5 h-5" /> Download guide
      </button>
      <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
        Ask a question
      </button>
    </div>
  </div>
);

export default AdmissionPage;
