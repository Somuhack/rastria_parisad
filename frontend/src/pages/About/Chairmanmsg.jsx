import Chaimanimage from "/chairman-message.jpg"
const ChairmanMessage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      {/* Page Title */}
      <h1 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
        Chairman Message
      </h1>

      {/* Image Banner */}
      <div className="w-full overflow-hidden rounded">
        <img
          src={Chaimanimage} // 👉 replace with your image
          alt="Chairman Message"
          className="w-full h-40 sm:h-56 md:h-64 lg:h-72 object-contain"
        />
      </div>

      {/* Content */}
      <div className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
        
        <p className="mb-4">
          <strong>Dear aspirants,</strong>
        </p>

        <p className="mb-4 indent-6">
          In the present era, practical application of knowledge is very important for survival. 
          Mere degrees will not help us succeed in our respective careers. Lack of practical 
          knowledge may jeopardise the chance of getting a job thus hampering our growth in career. 
          As computer knowledge has become indispensable in our life, not being a computer savvy 
          may really pose as a threat.
        </p>

        <p className="mb-4 indent-6">
          Our Government is also emphasizing computer education for a successful career. 
          Our aim is to impart computer education to all generations to uplift the rural youth. 
          Our job-oriented courses based on practical and skilled knowledge will empower yours 
          skills and make you competent and self-dependent.
        </p>

        <p className="mb-4 indent-6">
          We look forward to go hand in hand with you to make a bright future for all generations 
          and achieve success.
        </p>

        {/* Signature */}
        <div className="mt-6">
          <p className="font-semibold">With Best Regards</p>
          <p className="font-semibold">Chairman of I.C.C.E- INDIA</p>
        </div>

      </div>
    </div>
  );
};

export default ChairmanMessage;