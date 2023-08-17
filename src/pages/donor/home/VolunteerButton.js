const VolunteerButton = ({ isVolunteer, setIsVolunteer }) => {
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isVolunteer}
          onChange={() => setIsVolunteer(!isVolunteer)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#2CBB99]"></div>
        <span className="ml-3 text-sm font-medium">
          {isVolunteer ? "봉사가 가능해요!" : "봉사가 불가능해요..."}
        </span>
      </label>
    </>
  );
};

export default VolunteerButton;
