import React, { useState} from "react";
import './Roundone.css';
import { db } from "../firebase";

const Roundtwo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [code, setCode] = useState("");
  const [secretcode, setSecretcode] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("Round2")
      .add({
        name: name,
        email: email,
        college: college,
        code: code,
        secretcode: secretcode,
      })
      .then(() => {
        setLoader(false);
        alert("Your code has been submitted👍");
      })
      .catch((error) => {
        alert(error.code);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setCollege("");
    setCode("");
    setSecretcode("");
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleCutCopyPaste = (e) => {
    e.preventDefault();
  };
  

  
  return (
    <>
      <a href="/">◄- Back to home</a>
      <div className="question">
         <h1 >Question 2: <span className="animate1">Maximum Subarray Product</span></h1>
       <br></br>
    <p>You are given an array of integers, where each element represents the value of an item. Your
    task is to find the maximum product that can be obtained from a contiguous subarray within the
    given array. The subarray must contain at least one element.
    Write a function max_subarray_product(arr) that takes an array of integers as input and returns
    an integer, which is the maximum product of any contiguous subarray.
    </p>
    <h4>Input:</h4>
<p>arr (1 ≤ len(arr) ≤ 10^5) : An array of integers, where each integer (-10^9 ≤ arr[i] ≤ 10^9)
represents the value of an element.</p>
<h4>Output:</h4>
<p>An integer representing the maximum product of any contiguous subarray.</p>
<h4>Explanation:</h4>
<p>The contiguous subarray [2, 3] has the maximum product of 6.</p>
      </div>

      <form className="form app" onSubmit={handleSubmit}>
        <textarea
          id="blurmain"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onContextMenu={handleContextMenu}
          onCut={handleCutCopyPaste}
          onCopy={handleCutCopyPaste}
          onPaste={handleCutCopyPaste}
        ></textarea>

        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>College</label>
        <input
          placeholder="College"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />

        <label>Unique Code</label>
        <input
          placeholder="5 Digit Code"
          value={secretcode}
          onChange={(e) => setSecretcode(e.target.value)}
        />

        <button
          className="btn"
          type="submit"
          style={{ background: loader ? "#ccc" : "rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Roundtwo;
