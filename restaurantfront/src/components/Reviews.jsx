import React from "react";
import r1 from "../imgs/r1.png";
import r2 from "../imgs/r2.png";
import r3 from "../imgs/r3.png";

const Reviews = () => {
  return (
    <div className="p-32 font-poppins">
      <h1 className="text-6xl font-playfair pb-16">What Our Customers Say</h1>
      <div className="flex items-center lg:flex-row sm:flex-col gap-6">
        <div className="text-start bg-stone-50 px-8 py-10 rounded-lg w-fit">
          <h3 className="text-[#AD343E] text-xl font-bold pb-5">
            "The best restaurant"
          </h3>
          <p className="text-[#474747] pb-8">
            Last night, we dined at place and were
            <br />
            simply blown away. From the moment we
            <br />
            stepped in, we were enveloped in an
            <br />
            inviting atmosphere and greeted with
            <br />
            warm smiles.
          </p>
          <div className="flex items-center gap-5 border-t-2 pt-8">
            <img src={r1} alt="rev1" />
            <div>
              <b className="font-bold">Sophire Robson</b>
              <br />
              <span className="text-[#474747]">Los Angeles, CA</span>
            </div>
          </div>
        </div>
        <div className="text-start bg-stone-50 px-8 py-10 rounded-lg w-fit">
          <h3 className="text-[#AD343E] text-xl font-bold pb-5">
            "Simply delicious"
          </h3>
          <p className="text-[#474747] pb-8">
            Place exceeded my expectations on all
            <br />
            fronts. The ambience was cozy and
            <br />
            relaxed, making it a perfect venue for our
            <br />
            anniversary dinner. Each dish was
            <br />
            prepared and beautifully presented.
          </p>
          <div className="flex items-center gap-5 border-t-2 pt-8">
            <img src={r2} alt="rev2" />
            <div>
              <b className="font-bold">Matt Cannon</b>
              <br />
              <span className="text-[#474747]">San Diego, CA</span>
            </div>
          </div>
        </div>
        <div className="text-start bg-stone-50 px-8 py-10 rounded-lg w-fit">
          <h3 className="text-[#AD343E] text-xl font-bold pb-5">
            "One of a kind restaurant"
          </h3>
          <p className="text-[#474747] pb-8">
            The culinary experience at place is first
            <br />
            to none. The atmosphere is vibrant, the
            <br />
            food - nothing short of extraordinary. The
            <br />
            food was the highlight of our evening.
            <br />
            Highly recommended.
          </p>
          <div className="flex items-center gap-5 border-t-2 pt-8">
            <img src={r3} alt="rev3" />
            <div>
              <b className="font-bold">Andy Smith</b>
              <br />
              <span className="text-[#474747]">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
