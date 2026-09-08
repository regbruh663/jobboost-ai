function words(text){
  return [...new Set((text.toLowerCase().match(/[a-z][a-z0-9+#.-]{2,}/g)||[]))]
    .filter(x=>!["the","and","for","with","that","this","you","your","are","from","job","work","will","our","have","has","into","their","they","about","but","not","all","was","were","can","who","what","how","his","her","its","our"].includes(x));
}
function generate(){
  const title=document.getElementById("title").value.trim()||"the position";
  const job=document.getElementById("job").value.trim();
  const exp=document.getElementById("experience").value.trim();
  if(!job||!exp){alert("Add the job description and your experience first.");return;}
  const keys=words(job).filter(x=>x.length>3).slice(0,10);
  const bullets=[
    `• Delivered results using ${keys.slice(0,3).join(", ")||"relevant skills"}, connecting day-to-day work to the needs of ${title}.`,
    `• Applied experience in ${keys.slice(3,6).join(", ")||"customer service and problem solving"} to improve efficiency, quality, and customer experience.`,
    `• Demonstrated ownership, communication, and reliability while handling responsibilities described in the posting.`,
    `• Adapted quickly to changing priorities and used practical problem-solving to complete work accurately and on time.`,
    `• Built on existing strengths in ${keys.slice(6,9).join(", ")||"teamwork and organization"} to contribute to team goals.`
  ].join("\n");
  const cover=`Dear Hiring Manager,

I am excited to apply for the ${title} position. My experience includes ${exp.slice(0,300)}${exp.length>300?"...":""}

The role stood out to me because it calls for strengths such as ${keys.slice(0,5).join(", ")||"communication, reliability, and problem solving"}. I would bring a practical, dependable approach, a willingness to learn, and a focus on producing strong results.

I would welcome the opportunity to discuss how my experience can contribute to your team. Thank you for your time and consideration.

Sincerely,
[Your Name]`;
  const interview=[
    `1. Tell me about yourself.\nFocus on: your most relevant experience, 2–3 strengths, and why you want ${title}.`,
    `2. Why do you want this job?\nConnect your experience directly to the employer's needs.`,
    `3. Tell me about a difficult situation you handled.\nUse STAR: Situation → Task → Action → Result.`,
    `4. What is your biggest strength?\nChoose one skill supported by a real example from your experience.`,
    `5. Why should we hire you?\nGive three points: relevant experience, reliability, and a measurable result or accomplishment.`,
    `6. What questions do you have for us?\nAsk about success in the first 90 days, team priorities, and training.`
  ].join("\n\n");
  document.getElementById("bullets").textContent=bullets;
  document.getElementById("cover").textContent=cover;
  document.getElementById("interview").textContent=interview;
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("results").scrollIntoView({behavior:"smooth"});
}
function copyText(id){
  navigator.clipboard.writeText(document.getElementById(id).textContent);
  alert("Copied.");
}
function clearAll(){
  ["title","job","experience"].forEach(id=>document.getElementById(id).value="");
  document.getElementById("results").classList.add("hidden");
}
