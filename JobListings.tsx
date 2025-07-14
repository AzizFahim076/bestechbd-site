
'use client';
import { useState } from 'react';

export default function JobListings() {
  const [filter, setFilter] = useState('All');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      title: "Senior Civil Engineer",
      department: "Engineering",
      location: "Dhaka",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead construction projects, manage technical teams, and ensure quality standards in highway and infrastructure projects.",
      requirements: ["Bachelor's in Civil Engineering", "5+ years construction experience", "Project management skills", "AutoCAD proficiency"]
    },
    {
      title: "Construction Project Manager",
      department: "Management",
      location: "Chittagong",
      type: "Full-time",
      experience: "7+ years",
      description: "Oversee large-scale construction projects from planning to completion, manage resources and coordinate with stakeholders.",
      requirements: ["Engineering degree", "7+ years project management", "PMP certification preferred", "Strong leadership skills"]
    },
    {
      title: "Site Supervisor",
      department: "Operations",
      location: "Dhaka",
      type: "Full-time",
      experience: "3+ years",
      description: "Supervise daily construction activities, ensure safety compliance, and coordinate with construction teams.",
      requirements: ["Diploma in Civil Engineering", "3+ years site experience", "Safety certification", "Team management skills"]
    },
    {
      title: "Structural Engineer",
      department: "Engineering",
      location: "Dhaka",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and analyze structural components for bridges, buildings, and infrastructure projects.",
      requirements: ["Bachelor's in Structural Engineering", "4+ years experience", "STAAD Pro proficiency", "Bridge design knowledge"]
    },
    {
      title: "Quality Control Inspector",
      department: "Quality Assurance",
      location: "Various",
      type: "Full-time",
      experience: "2+ years",
      description: "Inspect construction work quality, conduct material testing, and ensure compliance with specifications.",
      requirements: ["Engineering background", "2+ years QC experience", "Material testing knowledge", "Attention to detail"]
    },
    {
      title: "Heavy Equipment Operator",
      department: "Operations",
      location: "Multiple Sites",
      type: "Full-time",
      experience: "3+ years",
      description: "Operate construction machinery including excavators, cranes, and road construction equipment.",
      requirements: ["Equipment operation license", "3+ years experience", "Safety training certificate", "Mechanical aptitude"]
    }
  ];

  const departments = ['All', 'Engineering', 'Management', 'Operations', 'Quality Assurance'];

  const filteredJobs = filter === 'All' 
    ? jobs 
    : jobs.filter(job => job.department === filter);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
          <p className="text-xl text-gray-600">
            Find your next career opportunity with Bestech Group
          </p>
        </div>

        {/* Job Applying Criteria Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Job Applying Criteria</h3>
          <p className="text-gray-600 mb-6 text-center">
            To maintain the quality of delivery, Bestech Group only accepts candidates from verified educational institutions with proven technical and academic strength.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-900 text-white rounded-lg mb-4">
                <i className="ri-graduation-cap-line text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Engineering/Technical Roles</h4>
              <p className="text-sm text-gray-600 mb-3">BSc in Civil Engineering or equivalent from:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• BUET</li>
                <li>• CUET</li>
                <li>• RUET</li>
                <li>• KUET</li>
                <li>• DUET</li>
                <li>• IUT</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-600 text-white rounded-lg mb-4">
                <i className="ri-tools-line text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Diploma Holders</h4>
              <p className="text-sm text-gray-600 mb-3">Accepted from:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Government Polytechnic Institutes (Dhaka, Ctg, Rajshahi, Khulna)</li>
                <li>• BTEB-accredited Technical Centers</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-lg mb-4">
                <i className="ri-briefcase-line text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Admin/Finance Roles</h4>
              <p className="text-sm text-gray-600 mb-3">Bachelor's/Master's in Business, Management, or Finance from:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Dhaka University</li>
                <li>• BRAC</li>
                <li>• NSU</li>
                <li>• EWU</li>
                <li>• Jahangirnagar University</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white rounded-lg mb-4">
                <i className="ri-hammer-line text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Field/Support Staff</h4>
              <p className="text-sm text-gray-600 mb-3">Requirements:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Valid training in site safety</li>
                <li>• Tool use certification</li>
                <li>• Materials handling training</li>
                <li>• Documented site experience preferred</li>
              </ul>
            </div>
          </div>

          {/* General Requirements */}
          <div className="bg-gray-50 rounded-lg p-6 mt-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">General Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <i className="ri-user-heart-line text-blue-900 mr-3 mt-1"></i>
                <span className="text-gray-700">Strong communication and teamwork skills</span>
              </div>
              <div className="flex items-start">
                <i className="ri-map-pin-line text-blue-900 mr-3 mt-1"></i>
                <span className="text-gray-700">Willingness to work on-site in varied environments</span>
              </div>
              <div className="flex items-start">
                <i className="ri-calendar-line text-blue-900 mr-3 mt-1"></i>
                <span className="text-gray-700">Age limit: 22–40 (may vary by position)</span>
              </div>
              <div className="flex items-start">
                <i className="ri-file-text-line text-blue-900 mr-3 mt-1"></i>
                <span className="text-gray-700">Ability to submit academic documents and references</span>
              </div>
            </div>
          </div>
        </div>

        {/* Job Application Process Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Job Application Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-900 text-white rounded-full mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Review Openings</h4>
              <p className="text-sm text-gray-600">
                Visit our Careers section on the website to find updated job postings categorized by department and role.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-600 text-white rounded-full mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Submit Your Application</h4>
              <p className="text-sm text-gray-600 mb-3">
                Send your complete CV with a recent passport-size photo, certificates, and a short cover letter to:
              </p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm font-semibold text-blue-900 flex items-center justify-center">
                  <i className="ri-mail-line mr-2"></i>
                  office.hr379@gmail.com
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Subject Format: Application for [Job Title] – [Your Full Name]
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Optional Submission (Offline)</h4>
              <p className="text-sm text-gray-600">
                You may also drop off a printed CV and documents at our Dhaka or Chattogram office reception during office hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-600 text-white rounded-full mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Follow-up</h4>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm font-semibold text-gray-900 flex items-center justify-center mb-1">
                  <i className="ri-phone-line mr-2"></i>
                  01907-149059 | 01973-416066
                </p>
                <p className="text-xs text-gray-600">
                  Call Sunday–Thursday, 10:00 AM – 5:00 PM
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-red-600 text-white rounded-full mx-auto mb-4">
                <span className="text-xl font-bold">5</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Interview & Technical Assessment</h4>
              <p className="text-sm text-gray-600">
                Shortlisted candidates will be invited for assessment. Field roles may require practical demonstrations or on-site visit readiness.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 inline-block">
              <p className="text-sm text-yellow-800 font-medium">
                <i className="ri-information-line mr-2"></i>
                We review applications within 7-10 business days and contact qualified candidates directly
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`px-6 py-3 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                filter === dept
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {job.department}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <i className="ri-map-pin-line mr-1"></i>
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <i className="ri-time-line mr-1"></i>
                      {job.type}
                    </span>
                    <span className="flex items-center">
                      <i className="ri-user-line mr-1"></i>
                      {job.experience}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 lg:ml-6">
                  <button 
                    onClick={() => handleApply(job)}
                    className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                  <button className="border border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form Modal */}
        {showApplicationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Apply for {selectedJob?.title}
                  </h3>
                  <button 
                    onClick={() => setShowApplicationForm(false)}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
                
                <form id="job-application">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <input 
                        type="number" 
                        name="experience"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resume Upload *
                    </label>
                    <input 
                      type="file" 
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter
                    </label>
                    <textarea 
                      name="coverLetter"
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us why you're interested in this position (max 500 characters)"
                    ></textarea>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <button 
                      type="submit"
                      className="flex-1 bg-blue-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Submit Application
                    </button>
                    <button 
                      type="button"
                      onClick={() => setShowApplicationForm(false)}
                      className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
