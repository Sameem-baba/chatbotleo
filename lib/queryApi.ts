/* eslint-disable @typescript-eslint/no-unused-vars */

const questionsAndAnswers = [
	{
		question: "I’ve noticed blood in my stool. Could it be something serious?",
		answers: [
			{
				topic: "Possible Causes",
				details: [
					"Hemorrhoids or anal fissures are common, especially if the blood is bright red and you have no other major symptoms.",
					"Dark or tarry stools may indicate bleeding higher in the colon.",
				],
			},
			{
				topic: "What To Do",
				details: [
					"If bleeding persists, is accompanied by pain, dizziness, or unexplained fatigue, see a doctor.",
					"Blood in the stool can sometimes signal more serious conditions like colon polyps, inflammatory bowel disease, or colon cancer.",
				],
			},
		],
	},
	{
		question: "Why have I been constipated/experiencing diarrhea for weeks?",
		answers: [
			{
				topic: "Possible Causes",
				details: [
					"Dietary factors (low fiber, dehydration).",
					"Stress or IBS (Irritable Bowel Syndrome).",
					"Infections (bacterial or parasitic).",
					"Underlying conditions such as inflammatory bowel disease or colon cancer.",
				],
			},
			{
				topic: "What To Do",
				details: [
					"If constipation or diarrhea persists longer than a few weeks—especially with blood in the stool, weight loss, or fatigue—visit a healthcare professional to rule out serious causes.",
					"They may recommend stool tests or a colonoscopy.",
				],
			},
		],
	},
	{
		question: "My stool looks narrower than usual. Should I be worried?",
		answers: [
			{
				topic: "Possible Causes",
				details: [
					"Narrow, “ribbon-like” stools might be caused by IBS, temporary bowel spasms, or partial obstruction.",
				],
			},
			{
				topic: "What To Do",
				details: [
					"If the narrow stools continue for more than a couple of weeks, or if you also notice blood in your stool, abdominal pain, or a feeling of incomplete evacuation, it’s wise to get evaluated.",
					"These could be signs of a blockage or growth in the colon.",
				],
			},
		],
	},
	{
		question:
			"I’ve been feeling bloated or having abdominal cramps a lot lately. What could cause this?",
		answers: [
			{
				topic: "Possible Causes",
				details: [
					"Gas, indigestion, IBS.",
					"Food intolerances or mild infections.",
					"Inflammatory bowel disease (e.g., Crohn’s, ulcerative colitis).",
					"Less common: partial bowel obstruction, colon cancer.",
				],
			},
			{
				topic: "What To Do",
				details: [
					"If bloating or cramping is persistent, severe, or paired with other warning signs (blood in stool, unexplained weight loss, fatigue), schedule a medical checkup.",
				],
			},
		],
	},
	{
		question:
			"I feel like I still need to go to the bathroom even after I’ve had a bowel movement. What does that mean?",
		answers: [
			{
				topic: "Possible Causes",
				details: [
					"This sensation, known as tenesmus, can occur with IBS, rectal inflammation (proctitis), hemorrhoids, or a growth in the rectum.",
				],
			},
			{
				topic: "What To Do",
				details: [
					"If it’s an occasional feeling without other symptoms, it could be less serious.",
					"If it’s persistent—especially with bleeding or changes in stool—consider further evaluation.",
				],
			},
		],
	},
	{
		question:
			"I’ve lost weight without trying. Could it be related to my digestion?",
		answers: [
			{
				topic: "Possible Causes",
				details: [
					"Malabsorption or chronic infections",
					"Hyperthyroidism or other metabolic issues",
					"Chronic diseases, including possible colon cancer",
				],
			},
			{
				topic: "What To Do",
				details: [
					"Unintentional weight loss is a red flag—particularly if it comes with other GI symptoms like blood in stool or persistent changes in bowel habits.",
					"Talk to your doctor for a thorough check.",
				],
			},
		],
	},
	{
		question: "Why am I feeling so tired all the time?",
		answers: [
			{
				topic: "Possible Causes",
				details: [
					"Iron deficiency anemia, which can result from gastrointestinal bleeding",
					"Chronic conditions such as thyroid disorders or autoimmune diseases",
					"Lifestyle factors like poor sleep or stress",
				],
			},
			{
				topic: "What To Do",
				details: [
					"If fatigue is unexplained and severe—especially with low iron levels or other GI symptoms—your doctor may recommend blood tests and possibly a colonoscopy.",
				],
			},
		],
	},
	{
		question:
			"Could my low iron levels or anemia be related to something more serious?",
		answers: [
			{
				topic: "Possible Causes",
				details: [
					"Long-term, slow blood loss from the digestive tract can cause iron deficiency anemia.",
				],
			},
			{
				topic: "What To Do",
				details: [
					"If standard iron supplements and dietary changes aren’t improving your anemia or you have other symptoms (blood in stool, persistent abdominal discomfort), additional testing (e.g., colonoscopy) is typically warranted to check for ulcers, polyps, or malignancies.",
				],
			},
		],
	},
	{
		question: "My appetite has changed recently. Should I be concerned?",
		answers: [
			{
				topic: "Possible Causes",
				details: [
					"Stress, infections, or mild digestive issues",
					"Underlying chronic illness (including GI disorders)",
					"Early signs of a more serious condition like colon cancer, especially if you also have weight loss or abdominal pain",
				],
			},
			{
				topic: "What To Do",
				details: [
					"If decreased or increased appetite persists and is paired with weight changes, bowel habit changes, or bleeding, speak with a healthcare provider for an evaluation.",
				],
			},
		],
	},
	{
		question: "I’ve been having mucus in my stool. Is that normal?",
		answers: [
			{
				topic: "Possible Causes",
				details: [
					"Irritable Bowel Syndrome (IBS) can cause small amounts of mucus in the stool.",
					"Inflammatory bowel diseases (like ulcerative colitis or Crohn’s) may also lead to mucus production—often accompanied by blood or abdominal pain.",
					"Infections (bacterial or parasitic) can sometimes result in mucus, especially during diarrhea.",
				],
			},
			{
				topic: "What To Do",
				details: [
					"If you notice persistent mucus, or you also see blood, have abdominal pain, or experience unexplained weight loss, speak with a doctor.",
					"Occasional small amounts of mucus may be normal, but significant or chronic changes warrant evaluation.",
				],
			},
		],
	},
	{
		question:
			"Could these symptoms be caused by stress, IBS, or something less serious?",
		answers: [
			{
				topic: "Possible Causes",
				details: [
					"Stress and anxiety often contribute to IBS-like symptoms (bloating, cramping, alternating diarrhea and constipation).",
					"Irritable Bowel Syndrome (IBS) is a functional disorder that can cause chronic abdominal discomfort, changes in bowel habits, and sometimes mucus in the stool.",
				],
			},
			{
				topic: "What To Do",
				details: [
					"If symptoms are short-lived and improve with diet modifications, stress management, or medication, they may well be stress-related or IBS.",
					"However, persistent, severe, or worsening symptoms (especially with blood in the stool, unexplained weight loss, or anemia) should prompt further medical investigation.",
				],
			},
		],
	},
	{
		question:
			"I’ve been experiencing some digestive issues. Could it be food intolerance or a stomach infection instead of something like cancer?",
		answers: [
			{
				topic: "Possible Causes",
				details: [
					"Lactose or gluten intolerance can cause bloating, gas, diarrhea, and abdominal cramps. Symptoms often improve when the offending food is removed from the diet.",
					"Bacterial, viral, or parasitic infections (e.g., gastroenteritis) can lead to diarrhea, sometimes with mucus or occasional blood. These often resolve in a few days to weeks with appropriate treatment and hydration.",
				],
			},
			{
				topic: "What To Do",
				details: [
					"If symptoms persist beyond a few weeks, recur frequently, or include blood in the stool, fever, or significant weight loss, it’s important to get a medical evaluation to rule out conditions like inflammatory bowel disease or colon cancer.",
				],
			},
		],
	},

	{
		question:
			"Am I at high risk for colon cancer? Should I start screening earlier than the general guidelines?",
		answers: [
			{
				topic: "High-Risk Factors",
				details: [
					"You may be at high risk if you have a strong family history, certain genetic conditions (e.g., Lynch syndrome, familial adenomatous polyposis), or a personal history of inflammatory bowel disease.",
					"If you're at high risk, your doctor may recommend starting colonoscopy before age 45 or other screening options.",
				],
			},
		],
	},
	{
		question: "How can I reduce my risk of developing colon cancer?",
		answers: [
			{
				topic: "Preventive Measures",
				details: [
					"Maintain a diet rich in fruits, vegetables, and whole grains.",
					"Stay physically active and maintain a healthy weight.",
					"Limit processed or red meats and moderate alcohol intake.",
					"Quit smoking if you smoke.",
					"Stay current on recommended screenings like regular colonoscopies.",
				],
			},
		],
	},
	{
		question:
			"Are there lifestyle changes I can make to help prevent colon cancer?",
		answers: [
			{
				topic: "Additional Lifestyle Changes",
				details: [
					"In addition to a healthy diet and exercise, focus on managing stress, getting sufficient sleep, and staying hydrated.",
					"Discuss calcium and vitamin D intake with your provider, as these may support colon health in some individuals.",
				],
			},
		],
	},
	{
		question:
			"What stage might the cancer be if it’s confirmed, and how does that affect treatment?",
		answers: [
			{
				topic: "Colon Cancer Staging",
				details: [
					"Colon cancer staging depends on the tumor's depth of invasion, whether it has spread to nearby lymph nodes or tissues, and whether metastasis has occurred (e.g., spread to the liver or lungs).",
				],
			},
			{
				topic: "Treatment Implications by Stage",
				details: [
					"Early-stage (Stage I or II): Often managed with surgery to remove the affected colon and nearby lymph nodes.",
					"Mid-stage (Stage III): Typically involves surgery plus chemotherapy, and sometimes radiation if the cancer is located in the rectum.",
					"Advanced-stage (Stage IV): May require a combination of chemotherapy, targeted therapy, immunotherapy, or palliative approaches. Surgery might still be used to relieve symptoms or remove limited metastases.",
				],
			},
		],
	},
	{
		question: "What are the treatment options available for my situation?",
		answers: [
			{
				topic: "Treatment Options",
				details: [
					"Surgical Resection: Removal of the cancerous part of the colon (colectomy).",
					"Chemotherapy: Medications that kill or slow the growth of cancer cells, often used if cancer has spread to lymph nodes or beyond.",
					"Radiation Therapy: Often used for rectal cancers, sometimes before or after surgery.",
					"Targeted Therapies: Medications that target specific genetic markers or pathways in cancer cells.",
					"Immunotherapy: Boosts the immune system to fight cancer cells, used for certain advanced or microsatellite instability–high tumors.",
				],
			},
			{
				topic: "Personalized Treatment Plan",
				details: [
					"Your treatment options will depend on the cancer stage, your overall health, genetic findings, and your preferences regarding side effects and treatment goals.",
				],
			},
		],
	},
	{
		question:
			"How effective are the treatments, and what are the possible side effects?",
		answers: [
			{
				topic: "Effectiveness",
				details: [
					"Early detection significantly increases success rates, and localized (early-stage) colon cancer has a good prognosis when treated with surgery alone.",
					"Advanced stages can be managed with combination therapies, though outcomes depend on the spread of the disease and how it responds to treatment.",
				],
			},
			{
				topic: "Possible Side Effects",
				details: [
					"Surgery: Pain, temporary changes in bowel habits, and risk of infection.",
					"Chemotherapy: Fatigue, nausea, hair loss, lowered immunity (increasing infection risk), and possible neuropathy (tingling in hands/feet).",
					"Radiation: Skin irritation, fatigue, diarrhea, or rectal discomfort (more common with rectal cancers).",
					"Targeted/Immunotherapies: Side effects include skin rashes, fatigue, and immune-related reactions depending on the specific drug.",
				],
			},
			{
				topic: "Supportive Care",
				details: [
					"Supportive medications and lifestyle strategies (diet, exercise, stress management) are often used to minimize treatment side effects.",
				],
			},
		],
	},
	{
		question: "Should I get a second opinion or genetic testing?",
		answers: [
			{
				topic: "Second Opinion",
				details: [
					"Getting a second opinion can help you feel confident about your diagnosis and treatment options. It may provide additional perspectives on your situation.",
				],
			},
			{
				topic: "Genetic Testing",
				details: [
					"Genetic testing can identify inherited mutations that might affect treatment decisions, especially if there is a family history of colon cancer or genetic syndromes like Lynch syndrome or familial adenomatous polyposis.",
				],
			},
		],
	},
	{
		question: "What tests can check if my symptoms are serious?",
		answers: [
			{
				topic: "Common Diagnostic Tests",
				details: [
					"Blood tests to check for anemia or signs of infection.",
					"Stool tests to detect hidden blood or infections.",
					"Imaging tests like CT scans or MRIs to identify abnormalities in the colon or surrounding areas.",
					"Colonoscopy is the gold standard for detecting colon cancer and other GI conditions.",
				],
			},
		],
	},
	{
		question: "Do I need a colonoscopy to find out what’s causing my symptoms?",
		answers: [
			{
				topic: "Colonoscopy for Diagnosis",
				details: [
					"A colonoscopy is a definitive test for diagnosing colon cancer, especially if there are concerning symptoms like blood in the stool, changes in bowel habits, or unexplained weight loss.",
				],
			},
			{
				topic: "Alternatives",
				details: [
					"Other imaging tests or stool tests may be used in some cases, but a colonoscopy is typically necessary for a thorough examination of the colon.",
				],
			},
		],
	},
	{
		question:
			"Is it possible to detect colon cancer without invasive procedures?",
		answers: [
			{
				topic: "Non-Invasive Tests",
				details: [
					"There are non-invasive tests like stool-based DNA tests (e.g., Cologuard) and stool occult blood tests that can detect signs of colon cancer.",
					"These tests are not definitive, and positive results may require further investigation with a colonoscopy.",
				],
			},
		],
	},
	{
		question:
			"Is colon cancer hereditary? Should my family members get tested or screened?",
		answers: [
			{
				topic: "Hereditary Factors",
				details: [
					"Certain genetic conditions—such as Lynch syndrome (HNPCC) or Familial Adenomatous Polyposis (FAP)—significantly increase the risk of developing colon cancer.",
				],
			},
			{
				topic: "Family History",
				details: [
					"If you have a first-degree relative (parent, sibling, or child) with colon cancer, your risk may be higher than average.",
					"In many cases, family members are encouraged to begin screenings earlier and at closer intervals than standard guidelines.",
				],
			},
			{
				topic: "Screening Recommendations",
				details: [
					"Even if a condition like Lynch syndrome or FAP isn’t confirmed, anyone with multiple affected relatives or early-onset colon cancer in the family should discuss earlier or more frequent colonoscopies with their doctor.",
				],
			},
		],
	},
	{
		question:
			"What genetic tests are available to assess my risk or the risk for my family?",
		answers: [
			{
				topic: "Generic Testing",
				details: [
					"Lynch Syndrome: Caused by mutations in MLH1, MSH2, MSH6, PMS2, or EPCAM genes.",
					"Familial Adenomatous Polyposis (FAP): Linked to the APC gene.",
				],
			},
			{
				topic: "Benefits",
				details: [
					"Helps identify inherited syndromes that can substantially increase colon cancer risk.",
					"Provides information for personalized screening plans and may influence treatment decisions if cancer is present.",
				],
			},
			{
				topic: "Process",
				details: [
					"Usually involves a blood or saliva test and thorough counseling about the implications of a positive or negative result.",
					"Family members can also choose to be tested to see if they carry the same mutation.",
				],
			},
		],
	},
	{
		question: "I’ve had a family member with colon cancer. Should I be tested?",
		answers: [
			{
				topic: "General Guidelines",
				details: [
					"If your family member was diagnosed at a younger age (often under 50), or if there are multiple relatives with colon cancer, you may need to start colonoscopy screenings earlier—sometimes 10 years younger than the affected relative’s age at diagnosis.",
					"If there’s a known genetic syndrome in your family, genetic counseling can determine if you should undergo testing.",
				],
			},
			{
				topic: "Importance of Screening: ",
				details: [
					"Detecting polyps early or finding cancer at a more treatable stage can drastically improve outcomes.",
					"In some hereditary cases, doctors may recommend annual or biennial (every 1–2 years) colonoscopy screenings.",
				],
			},
		],
	},
	{
		question:
			"I’m over 45, and I’ve never had a colonoscopy. Should I get one?”",
		answers: [
			{
				topic: "Updated Screening Guidelines",
				details: [
					"Many organizations now recommend beginning routine screening at age 45 (recently lowered from 50).",
				],
			},
			{
				topic: "Why It’s Important: ",
				details: [
					"A colonoscopy can detect and remove polyps before they turn cancerous.",
					"Early detection of any abnormal growth can significantly increase treatment success rates.",
				],
			},
			{
				topic: "Other Screening Options:",
				details: [
					"Noninvasive tests like the FIT (Fecal Immunochemical Test) or stool DNA tests are available, but an abnormal result typically leads to a colonoscopy for proper evaluation.",
					"If you’re at average risk and have no symptoms, talk to your doctor about which screening method is best for you.",
				],
			},
		],
	},
	{
		question: "Does my diet or lifestyle increase my risk for colon cancer?",
		answers: [
			{
				topic: "Dietary Factors: ",
				details: [
					"High intake of processed or red meats has been linked to a higher risk of colon cancer",
					"Diets low in fiber or high in saturated fats may also contribute to increased risk.",
				],
			},
			{
				topic: "Lifestyle Factors: ",
				details: [
					"Sedentary habits, obesity, smoking, and heavy alcohol use can raise the likelihood of developing colon cancer.",
					"Regular exercise and healthy body weight may lower risk.",
				],
			},
			{
				topic: "Prevention:",
				details: [
					"Eat a balanced diet rich in fruits, vegetables, and whole grains.",
					"Limit processed/red meats and moderate alcohol intake.",
					"Quit smoking if you smoke, and stay physically active.",
				],
			},
		],
	},
];

export { questionsAndAnswers };
