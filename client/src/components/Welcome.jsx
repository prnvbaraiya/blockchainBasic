import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 flex justify-center items-center border-[0.5px] border-gray-400 text-white";

const Input = ({ placeholder, name, type, value }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorpism"
  />
);

const Welcome = () => {
  const connectWallet = () => {};
  const handleSubmit = () => {};
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-center flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white py-1">
            Every Vote Counts
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            The vote is precious. It is the most powerful non-violent tool we
            have in a democratic society, and we must use it.
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="text-white flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer cursor-pointer hover:bg-[#2546bt]"
          >
            <p className="text-white text-base font-semibold">Vote Now</p>
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={`rounded-tr-2xl sm:rounded-none ${commonStyles}`}>
              Security
            </div>
            <div className={`rounded-none sm:rounded-tr-2xl ${commonStyles}`}>
              Blockchain
            </div>
            <div className={`rounded-none sm:rounded-bl-2xl ${commonStyles}`}>
              Veracity
            </div>
            <div className={`rounded-bl-2xl sm:rounded-none ${commonStyles}`}>
              Web 3.0
            </div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Ethereum</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="white" />
                </div>
                <BsInfoCircle fontSize={17} color="white" />
              </div>
              <div>
                <p className="text-white font-light text-sm">Voting System</p>
                <p className="text-white font-semibold text-sm text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex-col justify-center items-center blue-glassmorphism">
            <Input
              placeholder="Candidate"
              name="Candidate"
              type="text"
              handleChange={() => {}}
            ></Input>
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
              >
                Vote Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
