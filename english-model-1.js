const englishModel1 = [
    {
        q: "He is good ______ English.",
        options: ["in", "at", "on", "into"],
        answer: 1
    },
    {
        q: "She never goes there, ______?",
        options: ["did she", "didn't she", "does she", "doesn't she"],
        answer: 2
    },
    {
        q: "Choose the correct sentence:",
        options: ["Ravi or his friends coming.", "Either Ravi or his friends is coming.", "Either Ravi or his friends are coming.", "Either Ravi and his friends is coming."],
        answer: 2
    },
    {
        q: "Bread and butter ______ my favourite food.",
        options: ["is", "are", "has", "have"],
        answer: 0
    },
    {
        q: "I have been reading ______ morning.",
        options: ["in", "since", "for", "at"],
        answer: 1
    },
    {
        q: "Choose the correct spelling:",
        options: ["Occasion", "Ocassion", "Occassion", "Okassion"],
        answer: 0
    },
    {
        q: "The synonym of 'Ponder' is:",
        options: ["Wander", "Think", "See", "Run"],
        answer: 1
    },
    {
        q: "The antonym of 'Rural' is:",
        options: ["Town", "Urban", "Domestic", "Village"],
        answer: 1
    },
    {
        q: "He entered ______ the classroom.",
        options: ["in", "into", "onto", "no article"],
        answer: 3
    },
    {
        q: "This chair is made ______ wood.",
        options: ["of", "from", "by", "for"],
        answer: 0
    },
    {
        q: "Choose the correct spelling:",
        options: ["Receive", "Recieve", "Recceive", "Reccieve"],
        answer: 0
    },
    {
        q: "He deals ______ rice.",
        options: ["with", "in", "at", "on"],
        answer: 1
    },
    {
        q: "Both you and he ______ ready to go.",
        options: ["are", "is", "was", "has"],
        answer: 0
    },
    {
        q: "Raju was speaking English, ______?",
        options: ["was he", "wasn't he", "is he", "isn't he"],
        answer: 1
    },
    {
        q: "Are they not teaching us? (Change to Passive Voice)",
        options: ["Are we not being taught?", "Are we being not taught?", "Are not we being taught?", "Are we being taught?"],
        answer: 0
    },
    {
        q: "Raju said, 'He was to go there.' (Change to Indirect Narration)",
        options: ["Raju said that he was to go there.", "Raju said that he had to go there.", "Raju said that he is to go there.", "Raju said that he were to go there."],
        answer: 0
    },
    {
        q: "The synonym of 'Bandit' is:",
        options: ["Queen", "King", "Robber", "Thief"],
        answer: 2
    },
    {
        q: "The synonym of 'First' is:",
        options: ["Primary", "Last", "Start", "One"],
        answer: 0
    },
    {
        q: "The antonym of 'Certain' is:",
        options: ["Sure", "Clear", "Unclear", "Solid"],
        answer: 2
    },
    {
        q: "Ram is junior ______ Shyam.",
        options: ["than", "to", "after", "with"],
        answer: 1
    },
    {
        q: "The antonym of 'Silence' is:",
        options: ["Noise", "Peace", "Calm", "Mob"],
        answer: 0
    },
    {
        q: "To break the ice:",
        options: ["a strong man", "to start a quarrel", "to break the awkward silence", "to become violent"],
        answer: 2
    },
    {
        q: "She is the ______ of two sisters.",
        options: ["taller", "more tall", "tall", "tallest"],
        answer: 0
    },
    {
        q: "Suresh is ______ weak that he can not run.",
        options: ["so", "too", "as", "very"],
        answer: 0
    },
    {
        q: "The teacher said, 'Sit down, boys.'",
        options: ["The teacher told boys to sit down.", "The teacher ordered boys to sit down.", "The teacher asked boys to sit down.", "The teacher requested boys to sit down."],
        answer: 1
    },
    {
        q: "We ought to obey ______ parents.",
        options: ["our", "us", "my", "ours"],
        answer: 0
    },
    {
        q: "The ball was thrown by the boy. (Choose the correct active voice)",
        options: ["The boy throws the ball.", "The boy threw the ball.", "The boy was thrown by the ball.", "The boy thrown the ball."],
        answer: 1
    },
    {
        q: "Have you ever ______ to Delhi?",
        options: ["see", "go", "went", "gone"],
        answer: 3
    },
    {
        q: "They should have ______ us.",
        options: ["help", "helped", "helping", "helps"],
        answer: 1
    },
    {
        q: "Distribute these question papers ______ the students.",
        options: ["among", "between", "over", "in"],
        answer: 0
    },
    {
        q: "Choose the correctly spelt word:",
        options: ["Committee", "Commitee", "Committe", "Comity"],
        answer: 0
    },
    {
        q: "She is afraid ______ the coming examination.",
        options: ["from", "of", "by", "with"],
        answer: 1
    },
    {
        q: "I prefer tea ______ coffee.",
        options: ["than", "to", "on", "of"],
        answer: 1
    },
    {
        q: "I ______ catch the train on time.",
        options: ["dare", "can", "can have", "have"],
        answer: 1
    },
    {
        q: "He usually ______ the poor.",
        options: ["helps", "helping", "has helping", "helped"],
        answer: 0
    },
    {
        q: "______ of the politicians are corrupt.",
        options: ["The number", "Much", "Most", "Here"],
        answer: 2
    },
    {
        q: "______ moon is shining in the sky.",
        options: ["The", "A", "An", "No article"],
        answer: 0
    },
    {
        q: "He is ______ M.L.A.",
        options: ["The", "An", "A", "No article"],
        answer: 1
    },
    {
        q: "I dislike ______ cricket.",
        options: ["to play", "playing", "played", "of play"],
        answer: 1
    },
    {
        q: "You should study ______ .",
        options: ["proper", "proper way", "properly", "in proper"],
        answer: 2
    },
    {
        q: "He said, 'I can not go to Patna.' (Indirect Narration)",
        options: ["He said that I could not go to Patna.", "He said that he could not go to Patna.", "He said that he can not go to Patna.", "He said that I can not go to Patna."],
        answer: 1
    },
    {
        q: "Choose correctly spelt word:",
        options: ["Admission", "Addmision", "Addmission", "Admision"],
        answer: 0
    },
    {
        q: "He stops ________.",
        options: ["smoke", "to smoke", "smoking", "smoked"],
        answer: 2
    },
    {
        q: "Open the door. (Change into Passive Voice)",
        options: ["Let the door be opened.", "Let open the door.", "Let the door open.", "Let the door be open."],
        answer: 0
    },
    {
        q: "The magistrate and secretary of education department ________ coming.",
        options: ["are", "is", "has", "have"],
        answer: 1
    },
    {
        q: "Ram as well as his friends ________ gone.",
        options: ["has", "have", "are", "were"],
        answer: 0
    },
    {
        q: "Sita is ________ beautiful as her sister.",
        options: ["so", "as", "very", "not"],
        answer: 1
    },
    {
        q: "He said to me, 'May you live long!' (Change into indirect speech)",
        options: ["He blessed me I might live long.", "He blessed me that I might live long.", "He blessed me I may live long.", "He blessed me that I may live long."],
        answer: 1
    },
    {
        q: "Raju inquired of me if I ________ English.",
        options: ["spoken", "speak", "spoke", "am speaking"],
        answer: 2
    },
    {
        q: "The antonym of 'Toxic' is:",
        options: ["harmless", "swollen", "insulting", "tonic"],
        answer: 0
    },
    {
        q: "He ________ written a letter.",
        options: ["is", "has", "have", "was"],
        answer: 1
    },
    {
        q: "________ I go out, sir?",
        options: ["Can", "Might", "May", "Dare"],
        answer: 2
    },
    {
        q: "Ravi ________ to Agra next week.",
        options: ["will go", "go", "has gone", "went"],
        answer: 0
    },
    {
        q: "I ________ there last Sunday.",
        options: ["go", "gone", "went", "am going"],
        answer: 2
    },
    {
        q: "You must abide ________ the rules of your school.",
        options: ["to", "with", "for", "by"],
        answer: 3
    },
    {
        q: "I never believe ________ what he says.",
        options: ["on", "with", "in", "at"],
        answer: 2
    },
    {
        q: "He is ________ honest boy.",
        options: ["the", "an", "a", "no article"],
        answer: 1
    },
    {
        q: "I shall help you. (Change into Passive voice)",
        options: ["You will be helped by me.", "You are helped by me.", "You will helped by me.", "You shall be helped by me."],
        answer: 0
    },
    {
        q: "They ________ go to Patna. (Choose odd option)",
        options: ["has to", "have to", "are to", "were to"],
        answer: 0
    },
    {
        q: "Choose correctly spelt word:",
        options: ["Lieutenant", "Leiutenant", "Lueitenant", "Luietenant"],
        answer: 0
    },
    {
        q: "What is the modern civilization? It is the worship of ________.",
        options: ["material", "ethical", "brotherhood", "equality"],
        answer: 0
    },
    {
        q: "Earlier Dr. Zakir Hussain was the Governor of ________.",
        options: ["Bihar", "Punjab", "West Bengal", "Assam"],
        answer: 0
    },
    {
        q: "Dr. Zakir Hussain became the President of India in ________.",
        options: ["1963", "1967", "1965", "1969"],
        answer: 1
    },
    {
        q: "'My Experiment with Truth' is the autobiography of ________.",
        options: ["Dr. Zakir Hussain", "Jawahar Lal Nehru", "Mahatma Gandhi", "Lal Bahadur Shastri"],
        answer: 2
    },
    {
        q: "________ was coming to visit the narrator's family.",
        options: ["Mother", "Nanukaka", "Minister", "Father"],
        answer: 1
    },
    {
        q: "'A Pinch of Snuff' is a ________.",
        options: ["Drama", "Novel", "Short story", "Essay"],
        answer: 2
    },
    {
        q: "'I have a Dream' is related to ________.",
        options: ["Mahatma Gandhi", "Dr. Zakir Hussain", "Martin Luther King", "Martin Luther King, Jr."],
        answer: 3
    },
    {
        q: "Martin Luther King, Jr. received Nobel Prize in ________.",
        options: ["1964", "1965", "1963", "1967"],
        answer: 0
    },
    {
        q: "Bertrand Russell was a/an ________ philosopher.",
        options: ["American", "British", "Russian", "African"],
        answer: 1
    },
    {
        q: "The taming of domestic animals made life ________.",
        options: ["pleasanter", "fearful", "harmful", "None of these"],
        answer: 0
    },
    {
        q: "Shiga Naoya was born in ________.",
        options: ["1873", "1853", "1883", "1893"],
        answer: 2
    },
    {
        q: "Who has written the story 'The Artist'?",
        options: ["B. Russell", "S. Naoya", "M. Gandhi", "Kamla Das"],
        answer: 1
    },
    {
        q: "When a baby is born, it is an occasion of joy for ________.",
        options: ["the mother", "the father", "grandmother", "the whole family"],
        answer: 3
    },
    {
        q: "How Free is the Press is a/an ________.",
        options: ["essay", "story", "drama", "short story"],
        answer: 0
    },
    {
        q: "Clouds of Witness is a work of ________.",
        options: ["B. Russell", "S. Naoya", "Dorothy L. Sayers", "M. Gandhi"],
        answer: 2
    },
    {
        q: "H.E. Bates was born in ________.",
        options: ["1905", "1915", "1805", "1815"],
        answer: 0
    },
    {
        q: "How many hens were at first kept by Benjy?",
        options: ["A dozen", "Two dozen", "Three dozen", "Four dozen"],
        answer: 0
    },
    {
        q: "Pearl S. Buck taught in a/an ________.",
        options: ["American University", "Chinese University", "African University", "Iranian University"],
        answer: 1
    },
    {
        q: "Pearl S. Buck won the Nobel Prize in ________.",
        options: ["1938", "1838", "1928", "1828"],
        answer: 0
    },
    {
        q: "Anton Chekhov was a ________ by profession.",
        options: ["writer", "doctor", "poet", "engineer"],
        answer: 1
    },
    {
        q: "A Marriage Proposal is related to ________.",
        options: ["H.E. Bates", "Pearl S. Buck", "Anton Chekhov", "Germaine Greer"],
        answer: 2
    },
    {
        q: "John Donne is a ________ poet.",
        options: ["nature", "metaphysical", "cavalier", "romantic"],
        answer: 1
    },
    {
        q: "John Donne is well-known for his ________.",
        options: ["songs and sonnet", "satires", "sermons", "All of these"],
        answer: 3
    },
    {
        q: "Who has composed the poem 'Song of Myself'?",
        options: ["Walt Whitman", "John Donne", "Kamala Das", "Walter de la Mare"],
        answer: 0
    },
    {
        q: "Who is the speaker in the poem 'Song of Myself'?",
        options: ["A boy", "A girl", "The poet", "An old man"],
        answer: 2
    },
    {
        q: "'Now the leaves are falling fast' is ________ poem.",
        options: ["a pessimistic", "optimistic", "a pessimistic-cum-optimistic", "None of these"],
        answer: 2
    },
    {
        q: "'Now the Leaves are Falling Fast' was composed by ________.",
        options: ["W.H. Auden", "Walter de la Mare", "D.H. Lawrence", "Rupert Brooke"],
        answer: 0
    },
    {
        q: "Ode to Autumn is related to ________.",
        options: ["W.H. Auden", "John Keats", "W.B. Yeats", "John Donne"],
        answer: 1
    },
    {
        q: "Walter de la Mare was born in ________.",
        options: ["1873", "1853", "1863", "1883"],
        answer: 0
    },
    {
        q: "'An Epitaph' deals with a beautiful ________.",
        options: ["girl", "lady", "baby", "boy"],
        answer: 1
    },
    {
        q: "T.S. Eliot was awarded the Nobel Prize in ________.",
        options: ["1948", "1946", "1949", "1947"],
        answer: 0
    },
    {
        q: "Who has composed the poem 'Macavity; the Mystery Cat'?",
        options: ["W.B. Yeats", "T.S. Eliot", "W.H. Auden", "D.H. Lawrence"],
        answer: 1
    },
    {
        q: "________ is remembered as a war poet.",
        options: ["Rupert Brooke", "T.S. Eliot", "W.H. Auden", "Walt Whitman"],
        answer: 0
    },
    {
        q: "'The Soldier' is a ________ poem.",
        options: ["love", "nature", "comedy", "war"],
        answer: 3
    },
    {
        q: "'Fire Hymn' is composed by ________.",
        options: ["T.S. Eliot", "W.H. Auden", "Walt Whitman", "Keki N. Daruwalla"],
        answer: 3
    },
    {
        q: "The poet is ________ the snake.",
        options: ["in awe of", "afraid of", "running away from", "ready to hide from"],
        answer: 1
    },
    {
        q: "English language is ________ than Sanskrit and Persian.",
        options: ["older", "younger", "classical", "none of these"],
        answer: 1
    },
    {
        q: "Who wrote 'The Canterbury Tales'?",
        options: ["Langland", "Chaucer", "Yeats", "Keats"],
        answer: 1
    },
    {
        q: "Who wrote 'Mac Flecknoe'?",
        options: ["John Dryden", "John Donne", "Keats", "Yeats"],
        answer: 0
    },
    {
        q: "'King Lear' is a ________.",
        options: ["comedy", "tragedy", "tragi-comedy", "mysterious play"],
        answer: 1
    }
];
