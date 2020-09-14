export default {
    '005': {
      'title': 'Javascript and Python Rosetta Stone',
      'key': '005',
      'date': '2020-08-09',
      'docBodyHtml': `
      For the many people who learn either python or javascript, it is worth noting that
      how incredibly close you are to being operative in the other. One reason is that JSON is the
      language of REST calls and as such, both languages deal innately with JSON's lists
      [] and maps {}. Here is an abridged translation:
      <Pre>
        Hello this is
        a dog
      </Pre>
      <table class="bp3-html-table .modifier">
        <thead>
          <tr>
            <th>Task</th>
            <th>Python</th>
            <th>Javascript</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Create and filter a list</td>
            <td>
<Pre>
a = [1, 2, 3, 4]
[n for n in a if not n % 2 == 0]

<i>[1, 3]</i>
</Pre>
            </td>
            <td>
<Pre>
let a = [1, 2, 3, 4];
a.filter(n => n % 2 !=0);

<i>[1, 3]</i>
</Pre>
            </td>
          </tr>
          <tr>
            <td>Create two maps and merge them</td>
            <td>
<Pre>
one = {'a': 1}
two = {'b': b}
{**one, **two}

<i>{a: 1, b: 2}</i>
</Pre>
            </td>
            <td>
<Pre>
let one = {'a': 1}
let two = {'b': b}
{...one, ...two}

<i>{a: 1, b: 2}</i>
</Pre>
            </td>
          </tr>
          <tr>
            <td>Print each element in <br />
             a list with a running counter</td>
            <td>
<Pre>
a = [1, 2, 3, 4]
for i, ele in enumerate(a):
    print(ele, i)


<i>1, 0...</i>
</Pre>
            </td>
            <td>
<Pre>
let a = [1, 2, 3, 4];
a.forEach((ele, i) => {
    console.log(ele, i);
}

<i>1, 0...</i>
</Pre>
            </td>
          </tr>
          <tr>
            <td>Sort then map</td>
            <td>
<Pre>
cities = [{"city":"new york", "land_area":302.6},
          {"city":"seattle", "land_area":83.9},
          {"city":"kansas city", "land_area":315}]]
cities = sorted(cities, key=lambda x: x[‘land_area’])
cities = [c[‘city’] for c in cities]


<i>[‘new york’, ‘seattle’, ‘kansas city’]</i>
</Pre>
            </td>
            <td>
<Pre>
let cities = [{"city":"new york", "land_area":302.6},
              {"city":"seattle", "land_area":83.9},
              {"city":"kansas city", "land_area":315}];

cities = cities.sort((a, b) =>  {a.land_area - b.land_area})
               .map((d)  => d.city );

<i>[‘new york’, ‘seattle’, ‘kansas city’]</i>
</Pre>
            </td>
          </tr>
          <tr>
            <td>Accumulate on each <br />
             element of a list</td>
            <td>
<Pre>
area_km = 0
for d in cities:
    area_km += d[‘land_area’] * 2.6

<i>1823.9</i>
</Pre>
            </td>
            <td>
<Pre>
let areas_km = cities.reduce( (acc, d) => {
                          acc += d.land_area * 2.6;
                      }, 0);

<i>1823.9</i>
</Pre>
            </td>
          </tr>
        </tbody>
      </table>
      `,
      'tags': ['application development']
    },
    '004': {
      "title": "4 Problems in NLP We've Tried to Solve But Haven't Yet",
      'key': '004',
      "date": "2020-07-03",
      "docBodyHtml": `
      We've solved the Turing test: since 1980 there have been computers
      which we can't tell apart from humans. We have Alexa in our homes,
      Google answers our questions, Siri pulls up our favorite songs or movies on command.
      With so much done, what is there in NLP which we can't yet do?
      <br /><br /><h4>Technical question answering</h4>
      A computer can't answer quetions like 'Why is Microsoft Word broken?'. See the <a href='https://www.aclweb.org/anthology/W15-4640.pdf'>
      Ubuntu dialogue corpus</a>; attempts to provide helpful answers are at <a href='https://arxiv.org/pdf/2003.04976.pdf'>
      5% F1</a>, or the <a href='https://leaderboard.techqa.us-east.containers.appdomain.cloud'/>
      IBM TechQA dataset</a>, where results are working ~50% of the time.
      <br /> <br />
      While <a href='https://arxiv.org/pdf/1909.01958.pdf'>
      getting an "A" on a 12-th grade science exam</a>
      is a notable example of solving hard questions with a book as reference, and there are some attempts to build bots to
      <a href='https://www.techrepublic.com/article/want-to-be-a-better-programmer-try-microsofts-code-writing-question-answering-stack-overflow-bot/'>
      help answer Stack Overflow questions</a>,
      we are a long way from doing this for any domain and reference material.
      <br /> <br />Lastly, the best answer to "Why isn't my Arch installation working?" might begin,
      "Do you see your bootloader start on startup?" dialogue and investigation are part of any help desk.

      <br /><br /><h4>Lifelong Learning</h4>
      Given enough data, we can teach a network to do anything. Do we always need new data to do new things though?

      Reusing past learning is arguably the goal of expressing knowledge in an explicit format (as with knowledge bases or formal logic)
      or language models. And while there is evidence with <a href='https://arxiv.org/pdf/2005.14165.pdf'>GPT-3</a> that sufficient pre-training on
      large enough corposes of text can help solve many problems with just a few (or one) examples,
      much neural network fine-tuning suffers from a problem called "catastrophic forgetting";
      the more you train for one task, the less suited you are for another.

      Having a system which continuously accumulates knowledge from prior tasks and uses it for future tasks
      is the goal of a paradigm known as <a href='https://www.cs.uic.edu/~liub/lifelong-machine-learning-draft.pdf'>
      lifelong learning</a> (a superset of transfer learning), and it is, as of yet, unsolved.

      <br /><br /><h4>A Persuasive AI </h4>
      I know, I know, IBM's Project Debater <a href='https://www.youtube.com/watch?v=m3u-1yttrVw'>won a broadcast debate against a human</a>. Yet the constraints in that debate (has to be Wikipedia-referenceable)
      and in the debate's sub-genre (nothing open-ended like "propose a plan to do X"), as well as
      IBM's own continuing work on this topic,
      point to this being an unfinished area. More generally, these efforts
      seem focused on appearing logical to a panel of impartial judges -- anyone who's ever
      tried to <a href='https://genius.com/The-fray-how-to-save-a-life-lyrics'>convince a friend</a>
      knows changinging viewpoints is a matter of facts, feelings, motivations, and personal experiences.
      You might even start by <a href='https://mygestaltherapy.com/what-is-the-socratic-method-how-to-persuade-anyone/'>
      accepting their view</a>.
      <br /> <br />
      When Alexa can persuade me I should exercise today, I should change my political party, take one
      job offer over another, or make peace with the person I'm fighting, that will feel like a different AI.

      <br /><br /><h4>Explain like I'm 5 </h4>
      "If you truly understand your PhD Thesis, you'll be able to explain it to a
      5-year old." While there are
      <a href='https://www.quora.com/What-is-your-PhD-thesis-in-one-sentence'>
        multiple
      </a>
      <a href='https://lolmythesis.com/'>
        websites
      </a>
      devoted to this, we're pretty far from being able to read a scientific
      paper ("Subjective Social Status and Major  Depression: A Path Analysis of
      Biological and Psychosocial Mechanisms") and re-express it in common terms
      ("Feeling nervous about what others think of you makes you depressed.")
      There's at least <a href='https://research.fb.com/wp-content/uploads/2019/07/ELI5-Long-Form-Question-Answering.pdf'>one paper</a>,
      and much related work in abstractive summarization and
      sentence simplification, but both are incomplete.

      <br /><br /><h4>And every other</h4>
      The problem space of natural language processing is anything which has
      been accomplished with writing or spoken word. Anything which has been done with human words or thoughts,
      and not yet with a computer, is an unsolved part.
      `,
      "tags": ["research"]
    },
    '003': {
      'key': '003',
      'title': 'New Paper: Causality and Batch RL',
      'date': '2020-06-03',
      'docBodyHtml':`
        Written with professor Joan Bruna in the <a href='http://mathsdl-spring20.willwhitney.com/'>Mathematics of Deep Learning course</a>,
        our group released a <a href='https://arxiv.org/abs/2006.02579'>paper</a>
         about the intersection of two different fields related to AI:
        <a href='https://en.wikipedia.org/wiki/Causality'>causality</a> and offline (batch)
        <a href='https://en.wikipedia.org/wiki/Reinforcement_learning'>reinforcment learning</a>.
        We argue that these are different fields which tackle the same problem with similar
        mathematical models.


        <br /> <br />
        Here's the abstract:
        <br />
        <div class="bp3-card">
          <p class=".modifier">
            Reinforcement learning algorithms have had tremendous successes in online learning settings.
            However, these successes have relied on low-stakes interactions between the algorithmic agent and its environment.
            In many settings where RL could be of use, such as health care and autonomous driving, the mistakes made by most online RL algorithms during early training come with unacceptable costs.
            These settings require developing reinforcement learning algorithms that can operate in the so-called batch setting, where the algorithms must learn from set of data that is fixed, finite, and generated from some (possibly unknown) policy.
            Evaluating policies different from the one that collected the data is called off-policy evaluation, and naturally poses counter-factual questions. In this project we show how off-policy evaluation and the estimation of treatment effects in causal inference are two approaches to the same problem, and compare recent progress in these two areas.
          </p>
        </div>
      `,
      'tags': ['research']

    },
    '002': {
      "key": '002',
      "title": "How to handle the 'I have an App idea, can you help?' conversation",
      "date": "2020-03-01",
      "docBodyHtml":`
      A business is a common-enough situation to merit its own
      <a href='https://whartoniteseekscodemonkey-blog.tumblr.com/'>tumblr blog</a>
      and <a href='https://www.reddit.com/r/AskReddit/comments/fknqc2/coders_of_reddit_how_do_you_politely_refuse_your/'>
        Reddit threads</a>, many of which are unhelpfully scornful.
      <br /> <br />
      We might consider instead how great it is to have people who thinking creatively about technology and new applications.
      One might even <strong>show them the steps to prove their idea is a great one.</strong> This might look like:
      <ul>
      <li>Use Invisionapp or the like to build a mock-up that looks and acts like the real thing</li>
      <li>Show the mock-up to everyone they know and watch how users interact with it</li>
      <li>Make a market research survey get people to fill it out</li>
      <li>Drop $100 on internet ads to see the level of interest you get</li>
      </ul>
      They can do all of the product design and business planning on their own. And if they really did assemble the evidence and test the design, who knows, someone might build it.

      `,
      "tags": ["application development"]
    },
    '001': {
      "key": '001',
      "title": "So why include that package-lock.json?",
      "date": "2019-10-01",
      "docBodyHtml": `
      In javascript, package-lock.json seems a fairly extraneous byproduct of npm's build system. At first it seems like you wouldn't want to add it to your repo:
      <ol>
        <li>package-lock.json isn't used by the application to run at all </li>
        <li>package-lock.json gets regenerated when you run npm install, which you'll do anyway </li>
        <li>package-lock.json can actually make it harder to run an install, if some of your libraries have more recent versions you have to
        remove package-lock.json before an install will work.</li>
      </ol>
      <br />
      Yet there's one really good reason why you should ignore all the above and absolutely include it:
      <ol>
        <li>package-lock.json records exactly which package you installed. If you did npm install <package-name>@latest --save-dev,
        it probably looks something like this in your package.json: "<package-name>": "*".
        <br />
        Six months from now, when all of your build tools have changed, and the app somehow mysteriously stopped working,
        you'll need to know what exact package version was that "*" when it last worked. And you're not going to know that unless you checked in package-lock.json
        </li>
      </ol>
      `,
      "tags": ["bug report", "application development"]
    }
  };
