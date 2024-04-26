import React from "react";

const Main = () => {
  return (
    <div className="desktop:w-[100vw] desktop:h-[500px] flex flex-col justify-center items-center">
      <Deatail />
      <br />
      <ShortIntroduction />
      <br />
      <SubIntroduction />
      <br />
      <ExploreSound content={"Explore Sounds"} src={"/explore"} />
    </div>
  );
};

export default Main;

const Deatail: React.FC = () => {
  return (
    <div className="">
      <h3>Group 3 Music app</h3>
    </div>
  );
};

const ShortIntroduction: React.FC = () => {
  return (
    <div className="desktop:w-[490px]">
      <h1 className="text-5xl">Find the right sounds for your next hit.</h1>
    </div>
  );
};

const SubIntroduction: React.FC = () => {
  return (
    <div className="desktop:w-[468px]">
      <h3>
        Dive into expertly made music samples, covering all music styles. Get
        creative with endless sound choices.
      </h3>
    </div>
  );
};

type ButtonType = {
  content: String;
  src: String;
};

const ExploreSound: React.FC<ButtonType> = ({ content, src }) => {
  return (
    <>
      <div className="flex justify-center phone:w-[3rem] phone:h-[1.5rem] tablet:w-[8rem] tablet:h-[4rem] border-2 rounded-3xl border-pink-900 phone:text-[0.5rem] tablet:text-[0.8rem] desktop:text-[0.85rem] font-bold desktop:mt-[1rem]">
        <button>
          <a href={`${src}`}>{content}</a>
        </button>
      </div>
    </>
  );
};
