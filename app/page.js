"use client";

import { useEffect, useRef, useState } from "react";

const people = [
  {
    name: "Satish Bajpai",
    message:
      "Satish, as I sign off, I wanted to leave a sincere note of appreciation. I have always respected the way you carry yourself and the way you handle things with a calm and professional approach. I truly value the interactions we have had and the experiences along the way. Wishing you continued success and many great things ahead.",
  },

  {
    name: "Rohan Padmane",
    message:
      "Rohan, thank you for being someone I could always reach out to whenever I needed help or had something to figure out. Your understanding nature made many situations easier, whether it was work or something outside of it. I genuinely appreciate all those moments and wish you nothing but the best for everything ahead.",
  },

  {
    name: "Pratik Narse",
    message:
      "Pratik, I truly appreciate the time we shared and the positive interactions throughout this journey. Your polite nature, thoughtful approach, and the ease with which you connect with people have always stood out. I am glad to have known you and to have shared so many good moments along the way. Wishing you continued success, happiness, and many meaningful opportunities ahead.",
  },

  {
    name: "Raj Purohit",
    message:
      "Raj, I will always appreciate the guidance and direction you gave me during an important part of my journey. Your advice helped me understand things better and look at situations from a different perspective. Thank you for being someone I could learn from. Wishing you great success always.",
  },

  {
    name: "Aftab Khan 🤝",
    message:
      "Aftab, you are one of those friends whose presence made everyday life a lot more enjoyable. From random conversations and jokes to the memorable moments we shared, there are plenty of things I will remember with a smile. Truly grateful for the friendship. Stay the same and keep doing amazing things.",
  },

  {
    name: "Sachin Yadav 🤝",
    message:
      "Sachin, having a friend like you around made many ordinary days feel special. The conversations, jokes, fun moments, and everything in between are memories I will genuinely miss. Thank you for being such a good friend and such a great person to know. Wishing you success and happiness wherever you go.",
  },

  {
    name: "Pooja Bhati",
    message:
      "Pooja, your kindness and the comfort of having a good friend around made a real difference. I will always remember the conversations, laughs, and countless little moments we shared. Thank you for being such a genuine friend. Wishing you happiness, success, and many beautiful moments ahead.",
  },

  {
    name: "Anum Shaikh",
    message:
      "Anum, it was really nice having you as part of this journey. I appreciate the positive moments and simple conversations we shared along the way. These everyday interactions are often what make a journey memorable. Wishing you lots of happiness, success, and wonderful opportunities ahead.",
  },

  {
    name: "Ramji Sharma",
    message:
      "Ramji, thank you for always being approachable and for helping whenever something needed to be figured out. I genuinely appreciated the way you made things easier without making them complicated. Your calm nature and helpful attitude will always be remembered. Wishing you all the very best ahead.",
  },

  {
    name: "Rohan Gunjal",
    message:
      "Rohan, it was great sharing a part of this journey with you. I appreciate the good interactions and moments we had along the way. As I move forward, I hope you continue to achieve new things and enjoy every opportunity that comes your way. All the very best.",
  },

  {
    name: "Rucha Bhawarthe",
    message:
      "Rucha, it was genuinely nice having you as part of this journey. Your positive presence and the little conversations along the way made the everyday experience more enjoyable. I hope the road ahead brings you exciting opportunities, wonderful experiences, and plenty of reasons to smile.",
  },

  {
    name: "Sushant Nayak",
    message:
      "Sushant, it was great being around you during this journey. The everyday interactions and experiences become memories that stay much longer than expected. I will always remember the good moments we shared. Wishing you continued growth, success, and many exciting opportunities ahead.",
  },

  {
    name: "Nidhi Shetty",
    message:
      "Nidhi, I am really glad our paths crossed during this journey. Your pleasant nature and positive energy made the everyday experience better. I will always remember the simple interactions and good moments we shared. Wishing you a future filled with great opportunities, happiness, and success.",
  },

  {
    name: "Vinit Patil",
    message:
      "Vinit, thank you for being a good part of this journey. I appreciate the conversations, interactions, and positive moments we shared along the way. Wishing you the very best for the road ahead and hoping every new opportunity takes you one step closer to your goals.",
  },

  {
    name: "Anagha Parab",
    message:
      "Anagha, thank you for all the good moments and positive interactions we shared along the way. Even small conversations can become memorable when the people around you are genuine. Wishing you an amazing journey ahead with success, happiness, and many new opportunities.",
  },

  {
    name: "Deepak Chandan",
    message:
      "Deepak, thank you for being a good part of this journey. I appreciate the positive interactions and the moments we shared along the way. Wishing you success in your career and hoping the future brings you many great opportunities and experiences.",
  },

  {
    name: "Vaidehi Joglekar",
    message:
      "Vaidehi, it was really nice sharing this journey with you. The everyday conversations and small interactions created some good memories along the way. Wishing you a wonderful future with new opportunities, exciting experiences, and plenty of success.",
  },

  {
    name: "Mahendra Gaikwad",
    message:
      "Mahendra, it was genuinely good knowing you and sharing this part of the journey. I will remember the everyday interactions and the good moments we had. Wishing you success in your career and happiness in everything that lies ahead.",
  },

  {
    name: "Komal Salvi",
    message:
      "Komal, thank you for being such a wonderful part of this journey. I’ve really enjoyed the small conversations, everyday interactions, and good moments we shared along the way. These little things truly make the workplace special and memorable. Wishing you lots of success, happiness, and growth in everything you do ahead!",
  },

  {
    name: "Avinash Verma",
    message:
      "Avinash, it was really great knowing you and being part of this journey together. I truly enjoyed working with you and the experiences we shared along the way. Wishing you new opportunities, great experiences, and lots of success ahead. Keep learning, growing, and moving forward!",
  },

  {
    name: "Ankul Gaikwad",
    message:
      "Ankul, it was genuinely great having you as part of this journey. The time we spent working together brought its own share of learning, experiences, and good moments. As you move ahead, I hope you come across opportunities that challenge you, help you grow, and take you closer to where you want to be. Keep doing your thing, keep growing, and wishing you nothing but the best for what’s next!",
  },

  {
    name: "Payal Gole",
    message:
      "Payal, it was wonderful knowing you and sharing a part of this journey together. Your friendly nature and the positive moments we had will always be remembered. Wishing you all the very best for everything that comes next. Keep smiling, keep growing, and keep doing great.",
  },

  {
    name: "Deepshikha Singh",
    message:
      "Deepshikha, I truly enjoyed the time and conversations we shared along the way. It is always nice to meet people who bring a positive and pleasant atmosphere around them. Thank you for being part of the journey, and wishing you continued success and many exciting opportunities ahead.",
  },

  {
    name: "Gargi Kadu",
    message:
      "Gargi, thank you for being a wonderful part of this journey. The small conversations, everyday interactions, and good moments are what make a workplace memorable. I hope you achieve everything you are aiming for and have a fantastic journey filled with success and happiness.",
  },

  {
    name: "Sahil Bhoir",
    message:
      "Sahil, it was great knowing you and sharing a part of this journey together. I hope the road ahead brings you new experiences, good opportunities, and plenty of success. Keep learning, keep improving, and keep moving forward.",
  },

  {
    name: "Ashwini Pawaskar",
    message:
      "Ashwini, it was really nice knowing you and being part of the same journey for a while. Your friendly presence and positive attitude made the everyday experience better. Wishing you plenty of success, happiness, and exciting new experiences in everything that comes next.",
  },

  {
    name: "Samiaa Shaikh",
    message:
      "Samiaa, I am happy that our paths crossed during this journey. Your cheerful nature and positive interactions will definitely be remembered. Wishing you a bright future, great opportunities, and success in everything you choose to pursue. Keep smiling and keep moving forward.",
  },

  {
    name: "Omkar Sonawane",
    message:
      "Omkar, wishing you all the best for the journey ahead. There is a lot to explore, learn, and experience, and I hope you make the most of every opportunity that comes your way. Keep growing and enjoy the journey.",
  },

  {
    name: "Ajay Bhivsane",
    message:
      "Ajay, wishing you all the very best ahead. Keep learning, keep improving, and make every opportunity count. Have a great journey ahead!",
  },

  {
    name: "Jadhav, Sanket",
    message:
      "Sanket, wishing you all the best for everything ahead. Keep doing good work, keep learning, and keep moving forward. Have a great journey!",
  },
];

function PersonCard({ person, index, onOpen }) {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (y / rect.height - 0.5) * -12;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
      scale(1.02)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.transform = "";
  };

  return (
    <button
      ref={cardRef}
      type="button"
      className="person-card"
      style={{
        animationDelay: `${index * 35}ms`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpen(person)}
    >
      <span className="card-number">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="person-name">{person.name}</span>

      <span className="card-arrow">↗</span>

      <span className="card-shine" />
    </button>
  );
}

export default function Home() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedPerson(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (selectedPerson) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPerson]);

  return (
    <main className="page">
      {/* Background */}
      <div className="grid-background" />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <div className="floating-orb orb-one" />
      <div className="floating-orb orb-two" />
      <div className="floating-orb orb-three" />

      {/* Navigation */}
      <header className="topbar">
        <div className="brand">
          <span className="brand-dot" />
          ROBERT KENNEDY
        </div>

        <div className="signoff">
          FINAL NOTE <span>•</span> 2026
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-small">
          A MOMENT BEFORE MOVING FORWARD
        </div>

        <h1>
          Before I
          <br />
          <span>Sign Off.</span>
        </h1>

        <p className="hero-text">
          Some journeys end, but the people and moments that made
          them meaningful stay with us. Before I move forward, I
          wanted to leave a small note for the people who made this
          journey memorable.
        </p>

        <div className="scroll-indicator">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* Main Message */}
      <section className="message-section">
        <div className="section-label">
          <span>01</span>
          A FINAL NOTE
        </div>

        <div className="main-message">
          <p>
            As I come to the end of this journey, I find myself
            thinking less about the ending and more about the people
            and moments that made the journey worthwhile.
          </p>

          <p>
            Every conversation, challenge, laugh, helping hand, and
            simple everyday interaction became part of an experience
            I will carry forward.
          </p>

          <p>
            Thank you for being part of that experience. I may be
            moving on to something new, but the memories created
            along the way will always have a place with me.
          </p>

        
        </div>
      </section>

      {/* People */}
      <section className="people-section">
        <div className="people-heading">
          <div>
            <div className="section-label">
              <span>02</span>
              PEOPLE I WILL REMEMBER
            </div>

            <h2>
              A few words,
              <br />
              <span>for each of you.</span>
            </h2>
          </div>

          <p>
            Click on a name.
            <br />
            There is a personal note waiting.
          </p>
        </div>

        <div className="people-grid">
          {people.map((person, index) => (
            <PersonCard
              key={`${person.name}-${index}`}
              person={person}
              index={index}
              onOpen={setSelectedPerson}
            />
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="closing">
        <div className="closing-glow" />

        <div className="section-label">
          <span>03</span>
          UNTIL THE NEXT TIME
        </div>

        <h2>
          Leaving the Place,
          <br />
          <span> Keeping the Memories.</span>
        </h2>

        <p>
          Thank you for being part of the journey.
  
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-name">
          Robert Kennedy
          <span>© 2026</span>
        </div>

        <div className="footer-links">
          <a
            href="mailto:robertkennedy957@gmail.com"
            className="footer-link"
          >
            <span>✉</span>
            Gmail
          </a>

          <a
            href="https://www.linkedin.com/in/robert-kennedy-1644641b7"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <span>in</span>
            LinkedIn
          </a>
        </div>
      </footer>

      {/* Personal Message Popup */}
      {selectedPerson && (
        <div
          className="modal-overlay"
          onMouseDown={() => setSelectedPerson(null)}
        >
          <div
            className="modal"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedPerson(null)}
              aria-label="Close message"
            >
              ×
            </button>

            <div className="modal-top">
              <span>PERSONAL NOTE</span>
              <span>ROBERT KENNEDY</span>
            </div>

            <div className="modal-content">
              <h3 className="modal-person-name">
                {selectedPerson.name}
              </h3>

              <div className="modal-line" />

              <p>{selectedPerson.message}</p>
            </div>

            <div className="modal-bottom">
              <span>WITH APPRECIATION</span>

              <button
                type="button"
                onClick={() => setSelectedPerson(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}