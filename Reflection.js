import { Link } from 'react-router-dom'
import React from 'react';
import './Home.css';
import reflectionIMG from './Infographic.png'


function Reflection() {
  return (
    <div className="divBG">
      <div id="header">
        Reflection
      </div>
      <div className="textBG">

        <div className="text">
<p>When I was conducting my interviews, I honestly wasn't sure what type of people I was focusing on. I started with my school’s librarian, then moved to a local public librarian. My goal was to gain data, and learn from it, not to search for specific information. Eventually, I landed on the theme of librarians for the youth and young adults. I realized that of the interviews I had, my data points were spread out. My interviewees were separated on nearly every single topic so when I went to analyze my data, I was a little dumbfounded and confused. I realized that I could plot their opinions as spectra on a line to find correlations and differences across my interviewees and their related personas. Soon enough, I had nearly twenty spectra mapping out my data. Then I began searching deeper. I began finding connections between two spectra. I noticed that sometimes two independent data sets can point towards a more meaningful conclusion. Going further, I realized that I could connect three and even four spectra together to form what ended up as an overarching insight statement. 
</p>
<p>I chose this image because it explains the process I went through when finalizing my material. Additionally, it reflects the methodology that I reflected upon. The idea that starting with all data, then narrowing it down until eventually there is nothing else to eliminate. The whole idea is that the keys to unlocking the answer to a problem, or in this case, a good insight statement lies within the data is crucial.
</p>
<img src={reflectionIMG}></img>

        </div>
      </div>
    </div>
  );
}

export default Reflection;
