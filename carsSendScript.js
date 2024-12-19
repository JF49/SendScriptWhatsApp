async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}
									
enviarScript([Inhaling and exhaling deeply]
[Male] OK... Here we go. Focus.
Speed. I am speed.
[Cars whizzing past]
One winner, 42 losers.
I eat losers for breakfast.
[Car accelerating]
Breakfast.
Wait, maybe I
should have had breakfast.
A little breck-y could be good for me.
No, no, no, stay focused. Speed.
[Cars whizzing]
I'm faster than fast.
Quicker than quick.
I am lightning!
[Pounding on door]
[Male] Hey, Lightning! You ready?
[Sheryl Crow:
Oh, yeah. Lightning's ready
[engine rewing]
[Engine revs]
[Crowd cheers]
Ka-chow!
[Cars zooming]
Cars.
[Cars whooshing]
[Both scream]
[All cheer]
Get your antenna balls here!
Go, Lightnin'!
- Whoo!
- You got that right, slick. [whistles]
[Air wrench whirring]
Uh! [screams]
[Engine revs]
- [Male] Welcome back to the Dinoco 400.
- [Crowd cheers]
I'm Bob Cutlass, here
with my good friend, Darrell Cartrip.
We're midway through what may
be an historic day for racing.
Bob, my oil pressure's
Page 2/64
through the roof.
If this gets more exciting, they're
gonna have to tow me outta the booth!
Right, Darrell.
[Bob] Three cars are tied
for the season points lead,
heading into the final race
of the season.
And the winner of this race will win
the season title and the Piston Cup.
Does The King, Strip Weathers,
have one more victory in him
before retirement?
[Darrell] He's been Dinoco's golden boy
for years!
Can he win them one last Piston Cup?
[Bob] And, as always, in the
second place spot we find Chick Hicks.
He's been chasing
that tailfin his entire career.
[Darrell] Chick thought
this was his year.
His chance to finally emerge
from The King's shadow.
But the last thing he expected was...
Lightning McQueen!
[Bob] You know, I don't think
anybody expected this.
The rookie sensation
came into the season unknown.
But everyone knows him now.
[Darrell] Will he be the first rookie
to win a Piston Cup and land Dinoco?
[Bob] The legend, the runner-up,
and the rookie!
Three cars, one champion!
[Breaks screeching]
No you don't.
- [Chuckling]
- Hey!
- [Tires squealing]
- [Crowd booing]
What a ride!
[Chuckling]
Page 3/64
Go get 'em, McQueen!
Go get 'em!
[Female] I love you, Lightning!
- Dinoco is all mine.
- [Screaming]
[Darrell] Trouble, turn three!
- Get through that, McQueen.
- [Bob] Huge crash behind the leaders!
[Crowd gasps]
[Screaming]
[Giggling]
- [Grunts]
- [Gasps]
[Both screaming]
[Bob] Wait a second, Darrell.
McQueen is in the wreckage.
[Darrell] There's no way the rookie
can make it through!
Not in one piece, that is.
[Exhaling]
Yeah!
Lightning! Oh!
[Darrell] Look at that!
McQueen made it through!
[Bob] A spectacular move
by Lightning McQueen!
Yeah! Ka-chow!
McQueen! McQueen! McQueen!
McQueen! McQueen! McQueen!
Yeah, McQueen! Ka-chow! [honking]
[Bob] While everyone
heads into the pits,
McQueen stays out to take the lead!
Don't take me out, coach.
I can still race!
[Air wrench whirring]
[Chuckling] What do you think?
A thing of beauty.
- McQueen made it!
- [Chick] What?
He's not pitting!
You gotta get me out there!
Let's go! Get me back out there!
McQueen's not going into the pits!
Page 4/64
[Darrell] The rookie fired his
crew chief. The third this season!
- [Bob] Says he likes working alone.
- Go, go!
Looks like Chick
got caught up in the pits.
Yeah, after a stop like that,
he's got a lot of ground to make up.
Get ready, boys,
we're coming to the restart!
[Crowd cheers]
Come on, come on, come on!
We need tires now!
Come on, let's go!
- No, no, no, no! No tires, just gas!
- [Male] What?
You need tires, you idiot!
[Darrell] Looks like it's
gas-and-go's for McQueen today.
[Bob] Right. No tires again.
[Darrell] That's a short-term gain,
long-term loss,
but it's workin' for him. He obviously
knows somethin' we don't know.
[Cars whizzing]
[Bob] This is it, Darrell. One lap to go
and Lightning McQueen has a huge lead.
He's got it in the bag.
Call in the dogs and put out the fire!
We're gonna crown us a new champion!
[Crowd cheers and whistles]
[Screaming]
- Checkered flag, here I come!
- [Tire blows]
[Darrell] No! McQueen's blown a tire!
[Bob] And with only one turn to go!
Can he make it?
- You fool!
- [Grunts]
[Male] McQueen's blown a tire!
He's blown a tire!
Go, go, go!
- [Grunting]
- [Tire blows]
Page 5/64
[Darrell] He's lost another tire!
- King and Chick come up fast!
- [Bob] They're entering turn three!
Come on. [grunting]
I don't believe
what I'm watching, Bob!
Lightning McQueen
is 100 feet from his Piston Cup!
[Gasping]
[Growling]
[Bob] The King and Chick
rounding turn four.
[Darrell] Down the stretch they come!
And it's, and it's...
- It's too close to call! Too close!
- I don't believe it!
Lightning!
- The most spectacular, amazing...
- I don't believe it!
...unequivocally, unbelievable ending
in the history of the world!
- And we don't know who won!
- Look at that!
[Tape jittering]
[Slow motion drone]
- That's very close to call.
- Can we play that again?
Hey, no cameras! Get outta here!
We're here in Victory Lane,
awaiting the results.
We're here in Victory Lane,
awaiting the results.
McQueen, that was a risky move,
not taking tires.
Tell me about it!
Are you sorry you didn't have
a crew chief out there?
Oh, Kori. There's a lot more to racing
than just winning.
I mean, taking the race by a full lap...
Where's the entertainment in that?
I wanted to give folks a little sizzle.
- Sizzle?
- Am I sorry I don't have a crew chief?
Page 6/64
No, I'm not.
'Cause I'm a one-man show.
What? Oh, yeah, right.
That was a confident
Lightning McQueen.
Live from Victory Lane,
I'm Kori Turbowitz.
- Get outta the shot.
- Yo, Chuck.
Chuck, what are you doing?
You're blockin' the camera!
- Everyone wants to see the bolt.
- What?
- Now, back away.
- That's it! Come on, guys.
- Whoa, team! Where are you going?
- We quit, Mr. One-Man Show!
Oh, OK, leave. Fine.
How will I ever find anyone else
who knows how to fill me up with gas?
[Crowd laughs]
- Adios, Chuck!
- And my name is not Chuck!
Oh, whatever.
Hey, Lightning! Yo! McQueen!
Seriously, that was some
pretty darn nice racin' out there.
- By me!
- Oh, yeah.
- Zinger!
- Welcome to the Chick era, baby!
The Piston Cup...
It's mine, dude. It's mine.
Hey, fellas, how do you think
I'd look in Dinoco blue? Dinoco blue!
In your dreams, Thunder.
Yeah, right. Thunder?
What's he talkin' about, "Thunder"?
You know, 'cause thunder
always comes after lightning.
Ka-ping! Ka-pow!
- Who knew about the thunder thing?
- I didn't.
- Give us the bolt!
Page 7/64
- That's right.
Right in the lens.
- Show me the bolt, baby!
- Smile, McQueen!
- Show me the bolt, McQueen!
- That's it!
[Electronic music]
[Crowd chattering]
That was one close finish.
You sure made Dinoco proud.
Thank you, King.
Well, Tex, you've been
good to me all these years.
It's the least I could do.
Whatever happens, you're a winner
to me, you old daddy rabbit.
Thanks, dear.
Wouldn't be nothing without you.
Kch-i-ka-chow!
- I'm Mia.
- I'm Tia.
[Both] We're, like, your biggest fans!
Ka-chow!
I love being me.
- [Police] OK, girls, that's it.
- We love you, Lightning!
[Chuckles]
Hey, buddy.
You're one gutsy racer.
Oh, hey, Mr. The King.
You got more talent in one lug nut
than a lot of cars has got
in their whole body.
- Really? Oh, that...
- But you're stupid.
- Excuse me?
- This ain't a one-man deal, kid.
You need to wise up and get
a good crew chief and a good team.
You ain't gonna win
unless you got good folks behind you,
[voice dwindling] and you let them
do their job, like they should.
- Like I tell the boys at the shop...
Page 8/64
- A good team.
- Yeah...
- [electronic music]
Ka-chow! Ka-pow!
[Crowd cheering]
[Screaming]
[Cheering]
Oh, Lightning!
If you figure that out
you just gonna be OK.
Oh, yeah, that...
That is spectacular advice.
Thank you, Mr. The King.
- [Fanfare]
- [Bob] Ladies and gentlemen,
for the first time
in Piston Cup history...
[rewing] A rookie
has won the Piston Cup.
Yes!
[Bob]... we have a three-way tie.
- [Crowd cheers]
- [Cameras flash]
[Chuckling] Hey,
that must be really embarrassing.
But I wouldn't worry about it.
Because I didn't do it!
[Bob] Piston Cup officials
have determined that a tiebreaker race
between the three leaders
will be held in California in one week.
Well, thank you! Thanks to
all of you out there! Thank you!
[Whispering] Hey, first one to
California gets Dinoco all to himself.
No, not me!
No, you rock, and you know that!
Oh, yeah! Whoo!
Yep! All right! Got it!
"First one to California
gets Dinoco all to himself."
Oh, we'll see
who gets there first, Chick.
Huh?
Page 9/64
- Hey, kid! Congrats on the tie.
- I don't want to talk about it.
Let's go, Mack. Saddle up.
What'd you do with my trailer?
- I parked it at your sponsor's tent.
- What?
Gotta make your personal appearance.
No. No! No, no, no, no!
Yes, yes, yes!
Lightning McQueen here.
And I use Rust-eze Medicated
Bumper Ointment, new rear end formula!
Nothing soothes a rusty bumper
like Rust-eze.
Wow! Look at that shine!
Use Rust-eze and you too
can look like me!
Ka-chow!
[Both laughing]
I met this car from Swampscott.
He was so rusty
he didn't even cast a shadow.
- You could see his dirty undercarriage.
- [Crowd laughs]
[Groaning] I hate rusty cars.
This is not good for my image.
They did give you your big break.
Besides, it's in your contract.
Oh, will you stop, please?
Just go get hooked up.
- Winter is a grand old time.
- Of this there are no ifs or buts.
[Male 1] But remember,
all that salt and grime...
Can rust your bolts and freeze your...
Hey, look! There he is!
Our almost champ!
[Male 1] Get your rear end in here.
Lightning McQueen,
you are wicked fast!
- That race was a pisser!
- You were booking!
- Give me a little room.
- You're my hero!
Page 10/64
Yes, I know. [chuckles]
"Fred." Fred, thank you.
He knows my name.
He knows my name!
Looking good, Freddie!
Thanks to you, Lightning,
we had a banner year!
We might clear enough
to buy you some headlights.
You saying he doesn't have headlights?
That's what I'm telling ya.
They're stickers!
Well, you know,
racecars don't need headlights,
because the track is always lit.
Yeah, well, so is my brother,
but he still needs headlights.
[Laughing]
[Forced laughter]
- Ladies and gentlemen,
- [both] Lightning McQueen!
[Crickets chirping]
Free Bird!
You know, the Rust-eze Medicated
Bumper Ointment team
ran a great race today.
And remember, with a little Rust-eze...
[whispering] And an insane
amount of luck,
...you too, can look like me.
Ka-chow.
- Hey, kid.
- We love ya.
And we're looking forward
to another great year.
Just like this year!
Not on your life.
- Don't drive like my brother!
- Yeah, don't drive like my brother!
California, here we come!
Dinoco, here we come!
[Rascal Flatts:
[Birds chirping]
Page 11/64
[Phone ringing]
[Moaning] Oh... oh... uh,
I needed this. Hello?
[Male] Is this Lightning McQueen,
the world's fastest racing machine?
Is this Harv,
the world's greatest agent?
And it is such an honor
to be your agent
that it almost hurts me to take
ten percent of your winnings.
Merchandising. And ancillary rights in
perpetuity. Anyway, what a race, champ!
I didn't see it,
but I heard you were great.
Thanks, Harv.
Listen, they're giving you 20 tickets
for the tiebreaker thing in Cali.
I'll pass 'em on to your friends.
Shoot me the names.
- You let Harv rock it for you, baby.
- Right. Friends.
Yes, there's...
OK, I get it, Mr. Popular.
So many you can't even narrow it down.
Hey, when you get to town,
you better make time
for your best friend!
Break bread
with your mishpocheh here!
That'd be great!
We should totally...
OK, I gotta jump, kid.
Let me know how it goes. I'm out.
- [Dial tone hums]
- [Sighing]
- [Melodic beeping]
- [Wheels squeaking]
[Lightning] What? A minivan?
Come on, you're in the slow lane.
This is Lightning McQueen
you're hauling here.
Just stopping off
for a quick breather, kid.
Page 12/64
- Old Mack needs a rest.
- Absolutely not.
We're driving all night till we
get to California. We agreed to it.
All night? May I remind you
federal DOT regs state...
Come on, I need to get there
before Chick and hang with Dinoco.
[Mack groans]
All those sleeping trucks.
Hey, kid,
I don't know if I can make it.
Oh, sure you can, Mack.
Look, it'll be easy.
I'll stay up with you.
- All night?
- All night long.
[Snoring]
[Engines slowing]
[Snoring, gasping, blubbering]
[Grunting]
[Snoring] Uh!
[Blubbering]
- [Rap music]
- [Engines rewing]
[Sniffing] Ah-choo!
[Laughing]
- Hey, yo, D.J.
- What up?
- We got ourselves a nodder.
- [Chuckling]
[Kenny G:
Pretty music. [snoring]
Yo, Wingo! Lane change, man.
- Right back at ya!
- Yeah!
- Oops! I missed.
- You going on vacation?
[All laugh]
[Snoring]
[Snoring]
- [Chuckling]
- [Sniffling]
Page 13/64
- Oh, no, Snot Rod...
- He's gonna blow!
Ah... Ah... Ah-choo!
Gesundheit!
One should never drive while drowsy.
- [Tires squealing]
- [Horns honking]
- [Honking loudly]
- [Screaming]
- Uh! Ah!
- [All honking]
[Breathing heavily] Mack!
- [Grunting]
- [Horns honking]
Mack!
Mack!
Hey, Mack! Mack!
Mack!
Mack, wait for me! [engine rewing]
[Tires squealing]
Mack!
[Bell ringing]
[Horn bellowing]
Mack! Mack!
Mack! Mack...
...wait up! [coughing] Mack.
Mack! Mack!
What? You're not Mack.
Mack? I ain't no Mack!
I'm a Peterbilt, for dang sake!
[Peterbilt]
Turn on your lights, you moron!
Mack... The Interstate!
[Tires squealing]
- [Engine roaring]
- Huh?
Not in my town, you don't.
[Siren wailing]
Oh, no.
- Oh, maybe he can help me!
- [Sheriff backfiring]
He's shooting at me!
Why is he shooting at me?
[Backfiring]
Page 14/64
I haven't gone this fast in years.
[Grunting] I'm gonna
blow a gasket or somethin'.
Serpentine! Serpentine, serpentine!
What in the blue blazes?
Crazy hot-rodder.
[Siren continues wailing]
[Hank Williams:
My Heart Would Know]
[Buzzing]
[Water hose turning on]
[Snoring]
I'm telling you, man,
every third blink is slower.
The sixties weren't good to you,
were they?
[Car backfires]
[Sirens blasting]
What? That's not the Interstate!
- [Sheriff backfires]
- Ah! Oh!
Ow, ow, ow, ow, ow!
- [Screaming]
- [Tires screeching]
No, no, no, no, no, no!
Ow!
I'm not the only one seeing this, right?
- Incoming!
- Whoa, man.
- No!
- Hey!
Whoa, whoa, whoa, whoa!
My tires!
- [Grunting]
- [Gasping]
- [Screaming]
- [Gasping]
- [Tires squealing]
- [Cables vibrating]
[Yelling]
[Shouting]
[Screaming]
- [Cables whizzing]
Page 15/64
- [Straining]
Fly away, Stanley. Be free!
[Gasping]
[Breathing heavily]
Boy, you're in a heap of trouble.
[Sighing]
We're live at the Los Angeles
International Speedway
as the first competitor,
Lightning McQueen,
is arriving at the track.
Is it true he's gonna pose for Cargirl?
What's your strategy?
- [Crowd gasps]
- [Cameras clicking]
What? Did I forget
to wipe my mud flaps?
McQueen's driver arrived in California,
but McQueen was missing.
- McQueen was reported missing.
...to race an unprecedented...
[male] Sponsor stated
they have no idea where he is.
I hope Lightning's OK. I'd hate
to see anything bad happen to him.
I don't know what's harder to find,
McQueen or a chief who'll work with him!
[German accent] Lightning McQueen
must be found at all costs!
They're all asking the same question:
Where is McQueen?
[Groaning] Oh, boy.
Where am I?
- Mornin', sleepin' beauty!
- Ah!
Boy, I was wonderin'
when you was gonna wake up.
Take whatever you want!
Just don't hurt me!
A parking boot?
Why do I have a parking boot on?
- What's going on here? Please!
- [Chuckling] You're funny.
I like you already. My name's Mater.
Page 16/64
Mater?
Yeah, like "tuh-mater,"
but without the "tuh".
- What's your name?
- You don't know my name?
Uh...
No, I know your name.
Is your name Mater too?
What?
Look, I need to get to California
as fast as possible. Where am I?
Where are you? Shoot!
You're in Radiator Springs.
The cutest little town
in Carburetor County.
Oh, great. Just great!
Well, if you think that's great,
you should see the rest of the town.
You know,
I'd love to see the rest of the town!
So if you could just open the gate,
take this boot off,
you and me, we go cruisin',
check out the local scene...
- Dad-gum!
- How'd that be, Tuhmater?
- Cool!
- Mater!
What did I tell you
about talkin' to the accused?
To not to.
Well, quit your yappin' and tow this
delinquent road hazard to traffic court.
Well, we'll talk later, Mater.
[Chuckling] "Later, Mater."
That's funny!
Ah!
[Sheriff] The Radiator Springs
Traffic Court will come to order!
Hey, you scratched my paint!
I oughta take a blowtorch to you, man!
You broke-a the road!
You a very bad car!
- Fascist!
Page 17/64
- Commie!
Officer, talk to me, babe.
How long is this gonna take?
I gotta get to California, pronto.
Where's your lawyer?
I don't know. Tahiti maybe.
He's got a timeshare there.
When a defendant has no lawyer,
the court will assign one to him. Hey!
Anyone want to be his lawyer?
Shoot, I'll do it, Sheriff!
All rise! The Honorable
Doc Hudson presiding.
Show-off.
- May Doc have mercy on your soul.
- [Door banging]
- [Gasping]
- All right,
I wanna know who's responsible
for wreckin' my town, Sheriff.
I want his hood on a platter!
I'm gonna put him in jail till he rots!
No, check that.
I'm gonna put him in jail till
the jail rots on top of him,
and then I'm gonna move him
to a new jail and let that jail rot.
I'm...
Throw him out of here, Sheriff.
I want him out of my courtroom.
I want him out of our town!
- Case dismissed.
- Yes!
Boy, I'm purty good
at this lawyerin' stuff.
Sorry I'm late, Your Honor!
Holy Porsche! She's gotta be
from my attorney's office.
Hey, thanks for comin',
but we're all set.
- He's letting me go.
- He's letting you go?
Yeah, your job's pretty easy today.
All you have to do now is stand there
Page 18/64
and let me look at you.
Listen, I'm gonna cut to the chase.
Me, you, dinner. Pi-cha-kow!
- What the...? Ow! Oh!
- Ka-chow!
- Please!
- I know. I get that reaction a lot.
I create feelings in others that
they themselves don't understand.
- [Rewing]
- Agh! Ow!
Oh, I'm sorry. Did I scare you?
A little bit, but I'll be all right.
OK. I'm gonna go talk to the judge.
Do what you gotta do, baby.
But listen. Be careful.
Folks around here are not firing on
all cylinders, if you know what I mean.
Ka-ching!
Ah!
I'll keep that in mind.
- Hey there, Mater.
- Howdy, Sally.
- Hi, folks!
- Good morning!
You know her?
She's the town attorney and my fiancee.
What?
Nah, I'm just kiddin'.
She just likes me for my body.
You look great. You do something
different with your side view mirrors?
What do you want, Sally?
[Sighing] Come on, make this guy
fix the road. The town needs this.
No. I know his type. Racecar.
That's the last thing this town needs.
OK, I didn't want to have to do this,
Doc, but you leave me no choice.
Fellow citizens, you're all aware
of our town's proud history.
Here she goes again.
Radiator Springs,
the glorious jewel
Page 19/64
strung on the necklace
of Route 66, the mother road!
It is our job and our pleasure
to take care of the travelers
- on our stretch of that road.
- Travelers? What travelers?
Ignore him.
But how, I ask you,
are we to care for those travelers
if there is no road
for them to drive on?
- Luigi, what do you have at your store?
- Tires.
And if no one can get to you?
I won't sell any... tires.
I will lose everything!
- Flo, what do you have at your store?
- I have gas.
- Lotsa gas!
- OK boys, stay with me.
And, Flo, what'll happen if no one
can come to your station to buy gas?
I'll go outta business and...
we'll have to leave town.
What's gonna happen if Flo
leaves town and closes her station?
- [All] Without gas, we're done for!
- What?
Don't you think the car responsible
should fix our road?
The only guy strong enough
to fix that road is Big Al!
Lizzie, Big Al left like, 15 years ago.
Then why are you bringing
him up, you lemon?
Oh, he can do it.
He's got the horsepower.
So, what do you want him to do?
[All] Fix the road!
- Because we are a town worth fixing!
- Yeah!
[All cheer]
[Honking] Order in the court!
Seems like my mind
Page 20/64
has been changed for me.
- [All] Yeah!
- No!
[VW van] Nice ruling.
Oh, I am so not taking you to dinner.
[Chuckling] That's OK, Stickers.
You can take Bessie.
Man, you get to work with Bessie!
I'd give my left two lug nuts
for somethin' like that.
Bessie? Who's Bessie?
[Gurgling]
This here is Bessie,
finest road-pavin' machine ever built.
I'm hereby sentencing you
to community service.
You're gonna fix the road
under my supervision.
What? This place is crazy!
I know this may be
a bad time right now,
but you owe me $32,000
in legal fees.
What?
We're gonna hitch you up to Bessie,
and you're gonna pull her nice.
You gotta be kidding me.
You start there where the road begins.
You finish down there
where the road ends.
[Mater] Holy shoot!
Whoa, whoa, whoa!
How long is this gonna take?
Well, fella does it right,
should take him about five days.
Five days?
But I should be in California
schmoozing Dinoco right now!
Then if I were you,
I'd quit yappin' and start workin'!
- Hook him up, Mater.
- Okay-dokey.
[Grunting]
[Tires squealing, engine rewing]
Page 21/64
[Lightning] Freedom!
Maybe I should've
hooked him up to Bessie...
...and then...
then took the boot off.
Whoo-hoo!
Goodbye, Radiator Springs,
and goodbye, Bessie!
California, here I come! Yeah!
Oh, feel that wind.
Yes!
[Sputtering]
No. No, no, no.
No, no, no, no, no. Outta gas?
How can I be outta gas?
[Chuckling] Boy, we ain't
as dumb as you think we are.
[Stuttering] But how did,
how did... you...?
We siphoned your gas
while you were passed out.
- Ka-chow.
- Ow, ow, ow, ow.
- Gentlemen.
- Sheriff.
Hey, Sheriff.
- Why here?
- [Italian] Sono sempre stati qui.
- They were better before.
- Stai sempre a parlare.
- Guido!
- Red, can you move over?
I want to get a look
at that sexy hot rod.
You know, I used to be
a purty good whistler.
I can't do it now, of course,
on account of sometimes
I get fluid built up
in my engine block,
but Doc said he's gonna fix it.
He can fix about anything.
That's why we made him the judge.
Boy, you shoulda heard me on
Page 22/64
Giddy-up, Oom Papa Mow Mow.
Now, I'm not one to brag
but people come purty far
to see me get low on the "Mow-Mow".
Oh!
- Aw, man, that's just great!
- Hey, what's wrong?
My lucky sticker's all dirty.
Ah, that ain't nothin'.
I'll clean it for ya.
- [Snorting, hacking]
- No, no, no!
That won't be necessary.
Hey! Hey, big fella!
Yeah, you in the red!
I could use a little hose down.
Help me wash this off.
Where's he goin'?
Oh, he's a little bit shy, and
he hates you for killin' his flowers.
I shouldn't put up with this.
I'm a precision instrument
of speed and aerodynamics.
- You hurt your what?
- I'm a very famous racecar!
You are a famous racecar?
A real racecar?
Yes, I'm a real racecar.
What do you think? Look at me.
I have followed racing my entire life.
My whole life!
Then you know who I am.
I'm Lightning McQueen.
- Lightning McQueen?
- Yes! Yes!
I must scream it to the world!
My excitement from the top
of someplace very high!
- Do you know many Ferraris?
- No, no, no, no, no.
They race on the European circuit.
I'm in the Piston Cup!
- [Lightning] What?
- Luigi follow only the Ferraris.
Page 23/64
Is that what I think it is?
[Sally] Customers.
Customers!
Customers, everyone! Customers!
- [Sally] OK!
- Customers?
[Sally] Been a long time.
Remember what we rehearsed.
Make sure your
"Open, please come in" signs are out.
You all know what to do.
All right, nobody panics. Here we go!
Van, I just don't see
any on-ramp anywhere.
- Minny, I know exactly where we are.
- Yeah, we're in the middle of nowhere.
- Honey, please.
- [Sally] Hello.
Welcome to Radiator Springs,
gateway to Ornament Valley.
Legendary for
its service and hospitality.
How can we help you?
- We don't need anything, thank you.
- Ask for directions to the Interstate.
There's no need to ask for directions.
I know where we're going.
He did the same thing
on our trip to Shakopee.
We were headed over there
for the Crazy Days, and we...
- OK. Really. We're just peachy, OK?
- What you really need
is the sweet taste
of my homemade, organic fuel.
No, it doesn't agree with my tank.
- Just trying to find the Interstate.
- Good to see you, soldier!
Come on by Sarge's Surplus Hut
for your government surplus needs.
- Honey, surplus!
- We have too much surplus.
I do have a map
over at the Cozy Cone Motel.
Page 24/64
And if you stay, we offer a free
Lincoln Continental breakfast.
- Honey, she's got a map.
- I don't need a map! I have the GPS.
- Never need a map again, thank you.
- How 'bout somethin' to drink?
Stop at Flo's V-Eight Cafe.
Finest fuel on Route 66.
No we just topped off.
And if you need tires,
stop by Luigi's Casa Della Tires,
home of the Leaning Tower of Tires.
- We're trying to find the Interstate.
- But you do need a paint job.
Ramone will paint you up right.
Hey, anything you want!
- You know, like a flame job.
- No thanks...
Maybe ghost flames!
You like old school pinstripin'?
Von Dutch style?
- [Both gasp]
- Oh, honey, look. Von Dutch.
[Chuckling] OK, no.
We're gonna be going now, OK?
Ow!
[Laughs] A little somethin'
to remember us by, OK?
- OK!
- Come back soon, OK?
I mean, you know where we are!
Tell your friends!
[Van] OK! Yes. You bet.
Thanks again, folks.
Bye-bye now.
Psst! Psst!
Hey! Hey, hey, hey!
- I know how to get to the Interstate!
- Do ya?
- Minny, no.
- Yeah, yeah, yeah.
No, not really. But listen.
I'm Lightning McQueen, famous racecar.
I'm being held against my will.
Page 25/64
I need you to call my team,
so they can come rescue me
and get me to California in time for me
to win the Piston Cup. Understand?
- [Locks beeping]
- No, no, no, no, no, no, no.
No, it's the truth! I'm telling you!
You gotta help me! Don't leave me here!
I'm in hillbilly hell!
My IQ's dropping by the second!
I'm becoming one of them!
- [Lightning echoes]
- [Sighing]
OK, don't worry.
They know where we are now.
They'll tell friends. You'll see.
[Male DJ] We'll be back
for our Hank Williams marathon...
- That's good.
...after a Piston Cup update.
[Kori] Still no sign of Lightning
McQueen. Chick arrived in California
and today became the first car
to spend practice time on the track.
[Chick] It's nice to get out here
before the other competitors.
You know, get a head start.
Gives me an edge.
[Electronic music]
[Laughing]
Hoo-hoo-hoo!
Ha-ha!
Yeah!
[Crowd shouting and cheering]
[Girls chattering and giggling]
Hey, McQueen...
Eat your heart out.
[Gasping] Oh!
Let me get this straight.
I can go when this road is done.
That's the deal, right?
- That's what they done did said.
- OK. Outta my way.
I got a road to finish.
Page 26/64
[Grunting and rewing]
- He's done!
- Done?
- Uh-huh.
- It's only been an hour.
- [Bessie groans]
- Ah, I'm done. Look, I'm finished.
Say thanks, and I'll be on my way.
That's all you gotta say.
[Mater] Whee-hoo!
I'm the first one on the new road!
Oh!
[Vibrating] It rides purty smooth.
- It looks awful!
- Well, it matches the rest of the town.
- Oh!
- [Blubbering]
Red.
Who do you think you are?
Look, Doc said when I finish,
I could go. That was the deal.
The deal was you fix the road,
not make it worse.
Now, scrape it off!
Start over again.
Hey, look, grandpa,
I'm not a bulldozer. I'm a racecar.
Oh-ho-ho-ho!
Is that right? Then why don't we
just have a little race? Me and you.
- What?
- [Chuckling] Me and you. That a joke?
If you win, you go and I fix the road.
If I win, you do the road my way.
Doc, what're you doin'?
I don't mean to be rude here,
but you probably go zero to sixty in,
like, what? Three-point-five years?
Then I reckon
you ain't got nothin' to worry about.
You know what, old-timer?
That's a wonderful idea. Let's race.
[Sheriff] Gentlemen,
this will be a one-lap race.
Page 27/64
You will drive to Willy's Butte,
go around Willy's Butte and come back.
There will be no bumpin',
no cheatin', no spittin',
no bitin', no road rage, no maimin',
no oil slickin', no pushin', no shovin',
no backstabbin', no road-hoggin',
and no lollygaggin'.
Speed. I'm speed.
Float like a Cadillac,
sting like a Beemer.
[Luigi laughs]
My friend Guido, he dream to give
a real racecar a pit stop.
- Peet stop!
- Uh... [chuckles]
The race is only one lap, guys.
Uno lappo! Don't need any help.
- I work solo mio.
- Fine. Race your way.
- No pit stoppo. Comprendo?
- OK.
Gentlemen...
...start your engines!
[Engine sputters]
[Rewing furiously]
- Hijole! Check that out!
- Whoa.
Great idea, Doc.
Now the road will never get done.
Luigi?
[Chuckling] On your mark, get set...
Uno for the money,
due for the show,
tre to get ready, and quattro
to... I can't believe it. Go!
[Giggling]
[Cheering]
Huh?
Doc... the flag means go.
Remember the fl...
Here we go. Go.
Doc, what are you doing, man?
Oh, dear. It would seem
Page 28/64
I'm off to a poor start.
Well, better late than never.
Come on, Mater.
- Might need a little help.
- Uh... OK.
You got your tow cable?
Well, yeah,
I always got my tow cable. Why?
[Doc] Oh, just in case.
[Yelling] Ow! Ow!
Ow, ow, ow, ow, ow.
No, no, no, no, no!
- Oh, man!
- Whoa.
- Ow!
- [Fillmore] Bad trip, man.
[Rewing]
Hey! Was that floatin' like a Cadillac
or was that stingin' like a Beemer?
- I'm confused.
- [Chuckling]
[Doc] You drive like you fix roads.
Lousy! Have fun fishin', Mater.
[Gasps] Ah!
I'm startin' to think he knowed
you was gonna crash!
Thank you, Mater. Thank you.
I can make a little turn on dirt.
You think?
No. And now I'm a day behind.
I'm never gonna get outta here!
Hey, ese!
You need a new paint job, man!
- [Lightning] No, thank you.
- How 'bout some organic fuel?
- That freak juice?
- [Lightning] Pass.
Whoo! Watchin' him is makin' me thirsty.
Anybody else want somethin' to drink?
Nah, not me, Flo.
I'm on one of them there special diets.
I'm a precisional instrument
of speed and aero-matics.
"You race like you fix roads."
Page 29/64
[Grunting] I'll show him.
[Grunting] I will show him!
- [Tar splattering]
- Oh, great! I hate it!
- Hate, hate, hate, hate it!
- [Chuckles] Music. Sweet music.
Maybe this wasn't such a good idea.
[Lightning]
Radiator Springs, a happy place!
OK, Bessie, you think that's funny?
Great! I'm talking to Bessie now!
I'm talking to Bessie!
Wow.
[Mater] Mornin', Sally!
Hey, look at this here fancy new road
that Lightnin' McQueen done just made!
Yes! Uh, amazing!
Whoa-ho! Yeah! [sighing]
Oh, Ramone! Mama ain't
seen you that low in years.
I haven't seen a road like this
in years.
- Well, then let's cruise, baby.
- Low and slow.
[Italian] E bellissima! It's beautiful!
Guido, look, it's-a like
it was paved by angels.
Boy, I tell you what.
I bet even the roads on the moon
ain't this smooth.
Doc, look at this!
Shoulda tossed him into
the cactus a lot sooner, huh?
Well, he ain't finished yet.
Still got a long way to go.
Guido, look at Luigi!
This is fantastico!
That looks like fun!
Mater, I got dibs, next turn!
Hey, Luigi, this new road
makes your place look like a dump.
That crazy old devil woman.
[Sighs] Oh!
She's right!
Page 30/64
- Ah!
- Guido!
Huh. That punk actually did a good job.
Well, now... where the heck is he?
Sheriff!
Is he makin' another run for it?
No, no. He ran outta asphalt
in the middle of the night,
and asked me if he could
come down here.
All he's tryin' to do
is make that there turn.
[Lightning] No, no, no, no! Oh, great.
Perfect turns on every track
I've ever raced on.
Sheriff, why don't you go get yourself
a quart of oil at Flo's.
I'll keep an eye on him.
Well, thanks, Doc.
I've been feelin' a quart low.
[Engine rewing]
[Screaming]
[Spitting]
This ain't asphalt, son. This is dirt.
Oh, great. What do you want?
You here to gloat?
You don't have three-wheel brakes,
so you got to pitch it hard,
break it loose and then
just drive it with the throttle.
Give it too much, you'll be
outta the dirt and into the tulips.
So you're a judge,
a doctor and a racing expert.
I'll put it simple.
If you're goin' hard enough left,
you'll find yourself turnin' right.
Oh... Right. That makes perfect sense.
Turn right to go left! Yes! Thank you!
Or should I say, "No, thank you"?
Because in Opposite World,
maybe that really means, "Thank you"!
Crazy grandpa car. What an idiot!
[Groans]
Page 31/64
[Lightning] Turn right to go left.
Hmm...
Whoa!
- Oh!
- [Car crashing]
- Ow! Oh, that...
- [cactus crashing]
[Screaming] Ow!
Turn right to go left.
Guess what. I tried it.
You know what? This crazy thing
happened... I went right!
You keep talkin' to yourself,
people'll think you're crazy.
- Thanks for the tip.
- What? I wasn't talkin' to you!
- Oh, Guido, e bellissimo!
- Che cosa?
- It looks great! This is great!
- Ti piace, eh? Si, si, bellissimo.
[Grunts, passes gas]
Oh, Lord.
- [Chuckles]
- [Sheriff] Mater!
I need you
to watch the prisoner tonight.
Well, dad-gum! Wait a minute.
What if he tries to run again?
Just let him run outta gas
and tow him on back.
- But keep an eye on him.
- Yes, sir!
[Groaning] Oh...
While I'm stuck here
paving this stinkin' road,
Chick's in California schmoozing Dinoco.
My Dinoco. Whoa, whoa, whoa!
Who's touching me?
You have a slow leak. Guido, he fix.
You make-a such a nice new road.
You come to my shop.
Luigi take-a good care of you.
Even though you not a Ferrari.
You buy four tires,
Page 32/64
I give you a full-a size spare
- absolutely free!
- Look, I get all my tires for free.
[Chuckling] I like your style, eh?
You drive the hard bargain.
OK. Luigi make you a new deal.
You buy one tire,
I give you three for free!
[Flo] Oh, would you look at that?
Ramone, Ramone!
[Luigi] Then Luigi make you
a new new deal.
[Lightning] No, no, no, no.
Deal me out. Pass. No, thank you.
- No, no, no, no. No.
- This is it. My last offer.
You buy one tire, I give you
seven-a snow tires for free!
Done. You interested, you call me.
You know where I am.
[Exhales deeply]
Ah!
Stop! Let me...
Oh, Red, you missed a spot.
See it right there?
- No! No!
- On the hood right there.
Stop, stop! That's cold!
Help! Please! Stop!
- [Coughing, sputtering]
- Thanks, Red.
What was that for?
- Do you want to stay at the Cozy Cone?
- Huh?
If you do, you gotta be clean.
'Cause even in hillbilly hell
we have standards.
What, I...? I don't get it.
I thought I'd say thank you
for doin' a great job.
So I thought I'd let you stay with me.
I mean, not with me!
But there. Not with me there,
but there in your own cozy cone.
Page 33/64
- And I'd be in my cone, and it's...
- Wait. Wait, you're being nice to me.
If you want to stay
at the dirty impound, fine.
- I understand you criminal types.
- No, no, no, no. That's OK.
- Yeah, the Cozy Cone.
- [Sally] It's newly refurbished.
[Lightning chuckles] Yeah,
it's like a clever little twist.
The motel's made out of caution cones,
which, of course, cars try to avoid.
But now we're gonna stay in them.
That's funny.
Figure that all out on your own,
did you?
Cone number one, if you want.
Oh...
Hey, do I spy a little
pinstriping tattoo back there?
Oh... [chuckles]
That's just a... Oh!
[Both chuckle]
Oh, you saw that? Yeah.
Just gonna be going.
Gonna... Yeah.
- You know, I knew this girl Doreen.
- [Gasps]
Good-lookin' girl.
Looked just like a Jaguar,
only she was a truck!
You know, I used to crash into her,
just so I could spoke to her.
- What are you talking about?
- I don't know.
Hey, I know somethin' we can do tonight,
'cause I'm in charge of watchin' you!
No, Mater, I gotta finish this road,
and I have to get out of here.
Well, that's all right,
Mr. I Can't Turn On Dirt.
You probably couldn't handle it anyway.
Whoa, whoa, easy now, Mater.
You know who you're talkin' to?
Page 34/64
This is Lightning McQueen.
I can handle anything.
- [Whispering] I'm not doin' this.
- Come on. You'll love it! [chuckles]
- [Mater] Tractor-tippin's fun.
- [Lightning] This is ridiculous.
- [Tractors snore]
- [Mater] All right, listen.
When I say go, we go.
But don't let Frank catch you. Go!
Whoa! Wait! Who's Frank?
[Lightning whispering] Mater!
Wait, Mater!
OK, here's what you do.
You just sneak up in front of 'em,
and then honk.
And they do the rest. Watch this.
- [Honking loudly]
- Oh!
Oh... Oh! Oh... [mooing]
[Gas sloshing, backfiring]
[Laughing loudly]
I swear, tractors is so dumb!
I tell you what, buddy,
it don't get much better than this.
Yep, you're livin' the dream, Mater boy.
- [Honking]
- Oh!
Oh! Oh... [mooing]
[Gas sloshing, backfiring]
[Laughing] I don't care who you are,
that's funny right there.
Oh, your turn, bud.
Mater, I can't.
I don't even have a horn.
- Baby.
- I'm not a baby.
[Clucking]
Fine. Stop! Stop, OK?
All right. I'll do something.
[Snoring]
- [Rewing engine]
- Oh!
[All exclaiming and mooing]
Page 35/64
[All gurgling]
[All backfiring]
[Angry mooing]
[Mooing]
That's Frank.
- [Bellowing angrily]
- [Shouting]
- [Mooing]
- [Engine rewing]
[Mater laughing]
Run!
- Here he comes, look out!
- [Bellowing]
[Laughing] Whoa!
[Screaming]
Run! He's gonna get ya!
[Mater laughing]
Oh! Customers!
Oh!
Ah, no, no, no.
Oof! Oh!
[Mater] Tomorrow night we can
go look for the ghostlight!
- I can't wait, Mater.
- Oh, yeah, I'm tellin' ya!
Oh, boy,
you gotta admit that was fun!
Oh, yeah... yeah.
Well, we better get you
back to the impound lot.
You know, actually,
Sally's gonna let me stay at the motel.
Oh...
- Gettin' cozy at the Cone, is we?
- Oh, come... No. No, are you kidding?
Besides, she can't stand me.
And I don't like her, to be honest.
Yeah, you probably right.
Hey, look, there's Miss Sally!
- Where, where?
- [Laughing]
- You're in love with Miss Sally.
- No, I'm not.
- [Mater] Yes, you do.
Page 36/64
- [Lightning] No way.
- Way.
- Come on, look...
- You're in love with Miss Sally!
- Real mature.
- You're in love!
- Real grown up.
- You love her. You love her.
- Wait...
You love her!
You love her. You love her.
All right. OK. Mater, enough!
- Will you stop that?
- Stop what?
Driving backwards. It's creeping me out.
You're gonna wreck.
Wreck? Shoot!
I'm the world's best backwards driver!
You just watch this right here,
lover boy. Wee-hee!
[Lightning] What are you doing?
Watch out! Look out!
Mater? Mater!
- Mater!
- [Laughing]
Hey, take it easy, Mater!
[Screaming happily]
Oof!
[Blubbering] Yee-hee!
[Chuckling] He's nuts.
No need to watch where I'm goin'.
Just need to know where I've been.
Whoa, that was incredible!
How'd you do that?
Rearview mirrors. We'll get you some,
and I'll teach you if you want.
[Chuckling] Yeah,
maybe I'll use it in my big race.
What's so important
about this race of yours, anyway?
It's not just a race.
We're talking about the Piston Cup!
I've been dreaming about it
my whole life!
Page 37/64
I'll be the first rookie in history
ever to win it.
And when I do,
we're talkin' big new sponsor,
with private helicopters.
No more medicated bumper ointment.
No more rusty old cars.
What's wrong with rusty old cars?
Well, I don't mean you, Mater.
I mean other old cars. You know?
- Not like you. I like you.
- It's OK, buddy.
Hey, you think maybe one day I can
get a ride in one of them helicopters?
I mean, I've always wanted to ride
in one of them fancy helicopters.
- Yeah, yeah, yeah, sure, sure.
- You mean it?
Oh, yeah. Anything you say.
I knew it. I knowed
I made a good choice!
In what?
My best friend.
See you tomorrow, buddy!
McQueen and Sally
parked beneath a tree,
K- i-s-somethin'-somethin'-somethin'-t!
[Laughing]
[Rewing engine] Whoa, whoa, whoa.
[Chuckling]
Number one. Number one...
Ah, number one!
- Ah, this is nice.
- Hey, Stickers.
[Both scream]
- I'm sorry.
- You scared me. You gotta be careful.
I scared myself
scaring you scaring me.
- I mean, I wasn't like scared scared.
- No, of course not. No.
- I was more...
- I overheard you talkin' to Mater.
When? Just now?
Page 38/64
What, what did, what did you hear?
Something about a helicopter ride.
Oh, yeah. Yeah, he got
a kick out of that, didn't he?
- Did you mean it?
- What?
- That you'll get him a ride.
- Who knows?
First things first. I gotta
get outta here and make the race.
Uh-huh.
You know... Mater trusts you.
Yeah, OK.
- Did you mean that?
- What?
Was it just a "Yeah, OK",
or "Yeah... OK" or "Yeah, o-OK"?
Look, I'm exhausted.
It's kinda been a long day.
Yeah, OK. G'night.
[Groans] Oh...
Hey, thank you.
What did you just say?
You know,
thanks for lettin' me stay here.
It's nice to be out of the impound,
and this is... It's great.
- Newly refurbished, right?
- Yeah.
- G'night.
- Good night.
Hmm.
[Reveille plays]
[Jimi Hendrix:
Will you turn
that disrespectful junk off?
Respect the classics, man.
It's Hendrix!
[Groaning]
[Breathing rapidly]
[Muttering]
[Fast-paced electronic music]
Ah!
Page 39/64
- [Mooing loudly]
- [Screaming]
No!
[Yelling loudly]
[Mooing]
- No! [gasping]
- [Alarm beeping]
I gotta get outta here!
Hey, have you seen the Sheriff?
Oh! Oh, my gosh.
- Hey, what are you doin'?
- Get a good peek, city boy?
[Stuttering] I just need my
daily gas ration from the Sheriff.
Wait for him at Flo's.
Get outta here.
I've been trying
to get outta here for three days!
[Sheriff] Hope you enjoyed the show!
[Groaning]
Whoa, Doc.
Time to clean out the garage, buddy,
come on.
What?
He has a Piston Cup?
Oh, my gosh.
Three Piston Cups?
- [Doc] Sign says stay out.
- [Gasps]
You have three Piston Cups.
How could you have...
I knew you couldn't drive.
I didn't know you couldn't read.
- You're the Hudson Hornet!
- Wait at Flo's, like I told ya!
Of course. I can't believe
I didn't see it before.
You're The Fabulous Hudson Hornet!
You used to hold the record for most
wins in a season. Oh, we gotta talk.
- You gotta show me your tricks. Please.
- I tried that.
You won three times!
Look at those trophies!
Page 40/64
You look.
All I see is a bunch of empty cups.
[Country music]
[Country music]
You know, some automotive yoga
could really lower your RPM's, man.
Oh, take a car wash, hippie.
Yeah, look at my husband, y'all!
Whoo! That's your color!
- [Ramone] Yellow, baby.
- Mmm. You smokin' hot!
There he is.
Oh, my gosh!
Did you know Doc is a famous racecar?
- Doc? Our Doc?
- Not Doc Hudson.
No, no, no, no, it's true!
He's a real racing legend.
He's The Fabulous Hudson Hornet!
Fabulous? I never seen Doc
drive more than 20 miles an hour.
I mean, have you ever seen him race?
No, but I wish I could have.
They say he was amazing!
- He won three Piston Cups!
- He did what in his cup?
I think the heat's
startin' to get to the boy!
Well, I'll say! Look how red he is.
[Ramone] I think he needs
a new coat of poly, man.
- [Mater] Are you sick, buddy?
- You are lookin' peaked.
He needs a new coat of poly for sure!
[Gas bell rings]
- [Sheriff] Hey! What are you doin'?
- It's OK. You can trust me, right?
I trust you, all right.
It's him I'm worried about.
Hmm... I trust him.
- Come on, let's take a drive.
- A drive?
Yeah, a drive.
Don't you big city racecars
Page 41/64
ever just take a drive?
Ah... No. No, we don't.
[Gas pump stops]
Hey, Stickers! You comin' or what?
[Flo] Mm-hm!
- And you thought he was gonna run.
- Hey, can you believe it, man?
He actually thought
Doc was a famous racecar!
That's so too much!
OK, you got me out here.
Where are we goin'?
I don't know.
Whoa! Yes.
- [Sputtering]
- [Laughing]
Oh! Ah-ha-ha!
- Bleah!
- [Chuckling]
- [Grunts]
- [Laughs]
[Sputtering]
[Laughing]
[Chuckles] Oh!
[Spitting]
[Lightning] Wow. What is this place?
Wheel Well.
Used to be the most popular stop
on the mother road.
This place?
[Horns beeping]
[Sally sighing] Yeah, imagine.
Oh, imagine what
it must have been like to stay here.
You know, I don't get you.
How does a Porsche
wind up in a place like this?
Well, it's really pretty simple.
I was...
...an attorney in LA
livin' life in the fast lane, and...
Oh, you were, were you?
Were you rich?
- What?
Page 42/64
- Just... clues to the puzzle.
Yeah, OK.
Well, that was my life.
And you know what?
It never felt... happy.
Yeah. I mean... really?
Yeah. So I left California.
Just drove and drove
and finally broke down right here.
Doc fixed me up, Flo took me in.
Well, they all did. And I never left.
Yeah. You know, I understand.
You need a little R and R.
Recharge the old batteries.
But you know, after a while,
why didn't you go back?
[Inhaling heavily] I fell in love.
- Oh.
- Yep.
- Corvette?
- No.
I fell in love with this.
Whoa. Look at that.
Look, they're drivin' right by.
They don't even know
what they're missing!
[Sally] Well,
it didn't used to be that way.
Oh, yeah?
Yeah. Forty years ago,
that Interstate down there didn't exist.
Really?
[Sally] Yeah. Back then,
cars came across the country
a whole different way.
How do you mean?
The road didn't cut through the land
like that Interstate.
It moved with the land, you know?
It rose, it fell, it curved.
- Mornin'!
- Nice day, huh?
Cars didn't drive on it
to make great time.
Page 43/64
They drove on it to have a great time.
[James Taylor:
Well, what happened?
The town got bypassed
just to save ten minutes of driving.
[Lightning] How great would it have been
to see this place in its heyday!
Oh, I can't tell you how many times
I've dreamed of that.
But one of these days we'll
find a way to get it back on the map.
Yeah. Hey, listen, thanks for the drive.
I had a great time.
It's kinda nice to slow down
every once in a while.
You're welcome.
Hey, listen, listen!
If anybody asks you,
we was out smashin' mailboxes, OK?
[Chuckling] Wha... what?
[Rumbling]
[Mooing]
Oh, man, the paint's still wet!
- [Honking loudly]
- [Mooing]
No, no, no, no!
Get out of the store!
Hey! Don't eat the radial!
Here, take-a the snow tires.
- [Sheriff] Mater!
- I wasn't tractor-tippin'!
Then where did all these
gol-durn tractors come from?
- Whoa, boy!
- Hey! Hey, guys!
There's one goin' this way.
I got it.
Come here, little tractor,
come here.
Yeah, that's a good tractor.
No, no, no, no, come here.
What are you doing?
You're not supposed to go
Page 44/64
wandering off all...
...alone.
What are you doin'
with those old racin' tires?
[Sighing heavily]
Come on, Doc, drive.
[Revs engine]
Ah... Yeah.
- Wow.
- Huh?
You're amazing!
[Coughing] What are you doin'?
Doc, wait!
[Trucks mooing]
Giddup right in there!
Come on, Rusty.
Doc, hold it!
Seriously, your driving's incredible!
- Wonderful. Now, go away.
- Hey, I mean it. You've still got it!
- I'm askin' you to leave.
- Come on.
I'm a racecar,
you're a much older racecar,
but under the hood
you and I are the same.
We are not the same!
Understand? Now, get out.
How could a car like you quit
at the top of your game?
You think I quit?
[Lightning] Right.
Your big wreck in '54.
They quit on me.
When I finally got put together,
I went back expecting a big welcome.
You know what they said?
"You're history."
Moved right on to
the next rookie standing in line.
There was a lot left in me.
I never got a chance to show 'em.
I keep that to remind me
never to go back.
Page 45/64
I just never expected that
that world would...
...would find me here.
- Hey, look, Doc, I'm not them.
- Oh, yeah?
No, I'm not.
When is the last time you cared about
something except yourself, hot rod?
You name me one time
and I will take it all back.
Uh-huh. I didn't think so.
These are good folk around here,
who care about one another.
I don't want 'em depending
on someone they can't count on.
Oh, like you?
You've been here how long
and your friends
don't even know who you are?
Who's caring about only himself?
Just finish that road
and get outta here!
[Reveille plays]
[Jimi Hendrix:
[Sarge] Will you turn that
disrespectful junk off?
[Fillmore] Respect the classics, man.
[Snoring]
[Snorts, putters]
[Grunting]
[Smacking] Ah...
[Mater] He's done.
He must've finished it
while we was all sleepin'.
Good riddance.
He's gone?
Well, we wouldn't want him
to miss that race of his.
[Sniffing]
- Oh, dude, are you crying?
- No! I'm happy!
I don't have to watch him
every second of the day anymore!
Page 46/64
I'm glad he's gone!
[Blubbering, sobbing]
What's wrong with Red?
Oh, he's just sad
'cause you left town
and went to your big race to win
the Piston Cup
that you've always dreamed about
your whole life
and get that big ol' sponsor and that
fancy helicopter you was talkin' about.
[Gasping] Wait a minute!
[All laugh]
I knowed you wouldn't leave
without saying goodbye.
What are you doin' here?
You're gonna miss your race.
Don't worry. I'll give you
a police escort, and we'll make up time.
Thank you, Sheriff.
But you know I can't go just yet.
Well, why not?
- I'm not sure these tires...
- [Luigi gasps excitedly]
...can get me to California.
- Peet stop?
Yeah, does anybody know
what time Luigi's opens?
[Laughing] I can't-a believe it!
Four new tires!
[Laughing] I can't-a believe it!
Four new tires!
Grazie, Mr. Lightning. Grazie!
- Would you look at that!
- [Luigi] Our first customer in years!
I am filled with tears of ecstasy,
for this is the most glorious day
of my life!
All right, Luigi, give me
the best set of blackwalls you've got.
No! No, no, no.
You don't-a know what you want.
Luigi know what you want.
Blackwall tires.
Page 47/64
They blend into the pavement.
But-a this...
Whitewall tires!
They say, "Look at me!
Here I am! Love me."
All right, you're the expert.
- [Snarling]
- [Lightning] Don't forget the spare.
- Perfetto. Guido!
- Peet stop!
[Chuck Berry:
[Laughing] What did Luigi tell you, eh?
Wow, you were right.
Better than a Ferrari, huh?
Eh... No.
Wow! This organic fuel is great!
Why haven't I heard about it before?
It's a conspiracy, man!
The oil companies got a grip
on the government!
They're feedin' us a bunch of lies, man.
OK, I'll take a case.
Ow! Eh!
[Lightning yelps]
- [Chuckles]
- [Breathes in deeply]
[Ramone] Ah... Yeah.
[Lightning] Ka-chow.
- Here she comes!
- [Lightning] Places, everybody. Hurry!
- Act natural.
- [Whistling]
- Hi, Sally.
- Buon giorno!
All right, what's goin' on?
Ladies and gentlecars,
please welcome
the new Lightning McQueen!
Pow! What do you think?
Radiator Springs
looks pretty good on me.
[Chuckling] I'll say.
[Purring] Ka-chow.
Page 48/64
You're gonna fit right in
in California.
My goodness. It looks like
you've helped everybody in town.
Yeah, everybody except one.
- Hey, is it getting dark out?
- What? What'd he say?
Let me say that again.
Is it getting dark out?
Now, what was I
supposed to do after that?
[The Chords:
[Gasping] They fixed their neon!
- Low and slow?
- Oh, yeah, baby! [chuckling]
[Flo laughs and shrieks]
Just like in its heyday, right?
It's even better than I pictured it.
Thank you.
[Chuckling]
Shall we cruise?
Oh, thank you, dear. I'd love to!
- No, no, no.
- Lizzie!
I remember when Stanley
first asked me to take a drive with him.
Hey, Miss Sally.
May I have this cruise?
- Of course, Mater.
- Uh-uh-uh!
[Mooing]
...and again and I said, "No."
He asked me again, and I said, "No."
But, oh, he was a persistent
little bugger for a two-cylinder.
Finally I said,
"All right, one little drive."
- Oh!
- [Mater chuckling]
- Hey!
- Thanks, Mater.
Good evenin', you two.
Oh, Stanley,
Page 49/64
I wish you could see this.
- Is that what I think it is?
- Oh, I don't know, Flo.
I haven't had a chance to find out.
But I am going to find out. Hello.
Not that. That.
[Sally gasps] Customers?
[Sally gasps] Customers?
Customers, everybody!
And a lot of 'em!
You know what to do.
Just like we rehearsed.
[All gasp]
It's the ghostlight!
We have found McQueen.
We have found McQueen!
McQueen, over here!
- Wait, excuse me.
- Is it true you've been in rehab?
- Did you have a nervous breakdown?
- What?
- McQueen's wearing whitewalls!
- Your tires balding?
[Sally] Stickers!
- Was McQueen your prisoner?
- Shoot, no!
We're best buds!
I ain't braggin' or nothin',
but I was in charge of huntin' him down
if he tried to escape.
Sally! Sally!
Will you still race for the Piston Cup?
- Stickers?
- Sally!
- Come on, give us some bolt!
- [Horn honking]
You're here!
Thank the manufacturer! You're alive!
- Mack?
- You're here! I can't believe it!
[Chuckling] You are a sight
for sore headlights!
I'm so sorry I lost you, boss.
I'll make it up to you!
Page 50/64
Mack, I, I can't believe you're here.
[Harv] Is that the world's
fastest racing machine?
- Is that Harv?
- Yeah. He's in the back.
- Show us the bolt!
- Get back, you oil-thirsty parasites!
- Where's the old McQueen?
- Actually, this is my good side here.
- Harv! Harv!
- Give us the bolt!
- Harv?
- Come on!
- Kid, I'm over here!
- How you doin', buddy?
My star client disappears
off the face of the earth!
- How do you think I'm doing?
- I can explain.
I'm doing great! You're everywhere!
Radio, TV, the papers!
You can't buy this kind of publicity!
What do you need me for?
That's just a figure of speech,
by the way. You signed a contract.
Where are you?
I can't even find you on my GPS.
I'm in this little town
called Radiator Springs.
- You know Route 66? It's still here!
- Yeah, that's great, kid.
Playtime is over, pal.
While the world's been trying to
find you Dinoco has had no one to woo.
- Who are they gonna woo?
- Chick!
Bingo. In fact, check out
what's on the plasma right now.
- Show us the thunder!
- You want thunder?
You want thunder?
Ka-chicka, ka-chicka!
- Hey, that's my bit!
- You've gotta get to Cali, pronto!
Page 51/64
Just get out of Radiation Stinks now,
or Dinoco is history, you hear me?
Just give me a second here, Harv.
No, wait. Where are you goin'?
Get in the trailer, baby. Kid!
You want a bigger trailer?
Sally, I... I want you to...
Look, I wish... [sighs]
Thank you. Thanks for everything.
[Groans, chuckles]
- It was just a road.
- No. It was much more than that.
Hey, kid! We gotta go.
Harv's goin' crazy!
He's gonna have me fired if
I don't get you in the truck right now!
- Mack, just... hold it for...
- You should go.
- I know, but...
- Good luck in California.
I hope you find
what you're looking for.
- McQueen, come on!
- Sally...
- Sally!
- Show us the bolt, McQueen! The bolt!
Hey, Lightning, show us the bolt!
- Come on, get in the trailer.
- Where's the old McQueen?
- The bolt!
- That's it. That's right, let's go!
You're a big shining star.
You're a superstar.
You don't belong there, anyway.
Whoa... Wait...
Whoa, whoa, wait, wait!
[Engine starts]
Hey, guys!
McQueen's leavin' in the truck!
Hey, are you Doc Hudson?
- Yeah.
- Thanks for the call.
- You called them?
- It's best for everyone, Sally.
Page 52/64
Best for everyone or best for you?
I didn't get to say goodbye to him.
[Light buzzing]
[Bob] Hello, race fans. Welcome
to what has become, quite simply,
the biggest event
in the history of racing.
A three-way battle for the Piston Cup!
[Darrell] There's a crowd
of nearly 200,000 cars
here at the Los Angeles
International Speedway.
Tickets to this race are hotter than a
black leather seat on a hot summer day!
[Bob] The King, Chick Hicks
and Lightning McQueen
in a 200 lap, winner-takes-all,
tiebreaker race.
[Darrell] I got a lotta miles on me,
but let me tell you somethin'.
I never thought I'd see anything
like this. This is exciting!
[Bob] In fact, the country
has almost shut down
to watch what many experts
are calling "the race of the century."
Hey, King!
Good luck in your last race.
- You've sure been an inspiration to me.
- Thanks, Junior. Appreciate it.
- Hey, be careful out there, OK?
- Yeah, man.
[Mia] He's hot!
Wanna know the forecast?
I'll give you the forecast.
A 100 percent chance of thunder!
Ka-chicka! Ka-chicka!
Say it with me!
Ka-chicka! Ka-chicka!
Hey, you! No admittance
without a garage pass.
Oh, it's OK.
Lightning McQueen knows me!
Hey, Marco, it's a beautiful day
Page 53/64
for a race, isn't it?
- Absolutely, Mr. Andretti.
- And good morning to you, Fred.
Mario Andretti knows my name!
You gotta let me in now!
[Guard] Sorry, pal.
[Lightning] OK, here we go.
Focus. Speed.
I am speed.
[Cars whizzing]
Victory.
One winner, two losers.
[Engine rewing]
Speed. Speed. Speed. Speed...
[birds singing]
[Knock on door]
[Mack] Lightnin'! You ready?
[Gasping] Yeah, yeah, yeah! I'm ready.
[Indistinct chatter]
Mack, thanks for being
my pit crew today.
Don't worry about it, kid.
It's the least I could do.
After all, "Gas Can"
is my middle name.
- It is?
- Ah... Not really.
[All shouting]
[Gulping]
Uh-oh
- [cheering, laughing]
- [Giggling]
Nelson! Zoom in.
Ready, 16? Take 16.
[Bob] And there he is,
Lightning McQueen!
Missing all week, and then he turns up
in the middle of nowhere!
In a little town
called Radiator Springs.
[Darrell] Wearin' whitewall tires,
of all things.
- Oh!
- Ka-chicka! Ka-chicka! Ka-chicka!
Page 54/64
[Chuckling]
Hey, where you been?
I've been kinda lonely.
Nobody to hang out with.
I mean, except the Dinoco folks.
And the twins. Of course.
The ones that used to be your fans,
but now they're my fans.
Listen to what the twins think...
Agh! Shoot!
[Darrell] Boogity, boogity, boogity,
boys! Let's go racin'!
[Crowd cheering]
Come on, you can do it!
Come on, King, make us proud, boy!
[Bob] Fifty laps down, and The King
is still holding a slim lead.
[Darrell] McQueen's got a run on him!
He's lookin' to the inside!
Oh! Chick slammed the door on him!
[Bob] Chick's not
making it easy on him today.
[Darrell] He lost momentum,
and now he's gonna have to
chase him back down!
- [Soft music]
- [Birds singing]
[Breaks squealing]
[Bob] McQueen spins out in the infield!
[All gasp]
[Chuckling] Just me
and the old man, fellas.
- McQueen just doesn't have it today.
- [All laugh]
[Groans]
- Hey, kid, are you all right?
- I don't know, Mack.
I don't think I...
[Doc] I didn't come all this way
to see you quit.
Doc?
Guys, you're here!
I can't believe this!
I knew you needed a crew chief,
Page 55/64
but I didn't know it was this bad.
You said you'd never come back.
Well, I really didn't have a choice.
Mater didn't get to say goodbye.
Goodbye! OK, I'm good.
[Chuckles]
All right, if you can drive as good
as you can fix a road
then you can win this race
with your eyes shut.
Now, get back out there!
Hot snot, we are back in business!
Guido! Luigi!
You're goin' up
against professional pit crews.
- You're gonna have to be fast.
- They will not know what bit them!
Kid, you can beat these guys.
Find a groove that works for you
and get that lap back.
[Murmuring]
- Is it?
- Oh, wow. That's him!
Is that...? That's the Hudson Hornet!
The Hudson Hornet's back!
[Bob] It appears McQueen
has got himself a pit crew.
And look who he has for a crew chief!
- Look, man. It's the Hudson Hornet!
- Whoa!
Well, dip me in axle grease
and call me Slick! It surely is.
[Crowd cheering]
[Bob] Wow, this is history
in the making.
Nobody has seen the racing legend
in over 50 years!
Hey, Doc!
Come look at this fellow on the radio.
He looks just like you.
- [Bob] McQueen passes on the inside!
- [Darrell] He's nearly a lap down.
[Bob] Can he catch up to them
with only 60 laps to go?
Page 56/64
You're goin' great, kid.
Just keep your head on.
Vai! Vai, vai!
Hey, shrimpie,
where did McQueen find you, huh?
Those round things are called tires,
and they go under the car!
[All laugh]
Con chi credi di parlare?
Ma, con chi stai parlando?
No! No, no! You'll have your chance.
You will have your chance.
Oh, kid's just tryin'
to be a hero, huh?
What do you think of this?
- [Tires squealing]
- Yeah, that's it, kid.
What?
Whoa! Git-R-done!
- [Laughing] I taught him that. Ka-chow!
- Ah!
[Bob] What a move by McQueen!
He's caught up to the leaders.
Yeah. This is what it's all about.
A three-way battle for the lead,
with ten to go!
[Chortling]
Look at that boy go out there!
[Chick] Oh! [grunting]
No, you don't.
[Tire blows]
Doc, I'm flat! I'm flat!
- Can you get back to the pits?
- Yeah, yeah. I think so.
Hey, got a yellow. Bring it in.
Don't tear yourself up, kid.
[Mack] We gotta get him
back out there fast
or we're gonna be a lap down,
and we'll never win this race!
Guido! It's time.
Hey, tiny,
you gonna clean his windshield?
[Air wrench whirring]
Page 57/64
[Darrell] I don't believe it!
[Bob] That was
the fastest pit stop I've ever seen!
[Darrell] It was a great stop,
but he's still gotta beat that pace car!
[Bob] It's gonna be close.
- Yeah, baby!
- [All hollering]
[Darrell] He's back in!
Peet stop.
- Guido, you did it!
- Way to go, Guido!
[Bob] This is it. We're heading into
the final lap and McQueen
is right behind the leaders.
What a comeback!
[Darrell] A hundred and ninety-nine
laps! It all comes down to this!
This is it, kiddo.
You've got four turns left.
One at a time.
Drive it in deep and hope it sticks.
- Go!
- [Rewing]
We'll see about that!
[Bob] McQueen's going inside!
- Chick and King are loose!
- [Darrell] I think McQueen's out!
- McQueen saved it!
- [Bob] He's back on the track!
- Float like a Cadillac...
- Sting like a Beemer!
- Ka-chow! Ka-chow! Ka...
- [all cheer]
[Darrell] Lightning McQueen
is gonna win the Piston Cup!
Come on! You got it!
You got it, Stickers!
[Grunts] I am not comin' in
behind you again, old man.
- Oh, no!
- [Crowd gasps]
[Breaks screeching]
[Engine idling]
Page 58/64
Yeah! Whoo-hoo!
I won, baby! Yeah! Oh, yeah!
[Flo] What's he up to, Doc?
[Grunting, moaning]
What are you doin', kid?
I think The King
should finish his last race.
You just gave up the Piston Cup,
you know that?
This grumpy old racecar I know
once told me somethin'.
It's just an empty cup.
[Bob] Darrell, is pushing
on the last lap legal?
He's not really pushin' him. He's
just givin' him a little bump draft.
Whoo-hoo-hoo-hoo-hoo!
Hey. What? What's goin' on?
- That's what I call racin'.
- [Sobbing]
[Laughing]
[Crowd cheers wildly]
- Bravo il mio amico!
- Way to go, buddy!
There's a lotta love out there,
you know, man?
- Don't embarrass me, Fillmore.
- That's my hot rod.
Come on, baby, bring it out!
Bring out the Piston Cup!
Ka-chicka! Ka-chicka!
Yeah!
Now, that's what I'm talkin' about!
Hey, how come the only one celebrating
is me, huh?
Where are the girls?
Bring on the confetti!
Ow! Ow! Easy with the confetti.
What's goin' on?
Come on, snap some pictures.
I gotta go sign my deal with Dinoco!
Say it with me. Ka-chicka!
- Boo!
- Boo!
Page 59/64
What's wrong with everybody?
Where's the happiness?
Hey! This is the start of the Chick era!
- Thanks, Lightnin'.
- You're welcome.
- Way to go, King!
- You're still the car!
You're The King! Yeah!
[Crowd cheers]
[Laughing and cheering]
- You made us proud, kid!
- Congrats on the loss, me bucko!
You got a lotta stuff, kid.
Thanks, Doc.
Hey, Lightnin'.
How 'bout comin' over here
and talk to me a minute?
Son, that was some
real racin' out there.
How'd you like to become
the new face of Dinoco?
But I didn't win.
Lightnin', there's a whole lot
more to racin' than just winnin'.
[Clank] He was so rusty,
when he drove down the street
- buzzards used to circle the car!
- [All laugh]
Thank you, Mr. Tex, but...
...but these Rust-eze guys over there
gave me my big break.
I'm gonna stick with them.
Well, I sure can respect that.
Still, you know,
if there's ever anything
I can do for you, just let me know.
I sure appreciate that.
Thank you.
Actually, there is one thing.
Whoo-hoo!
Whoo-hoo!
Hey, look at me!
I'm flyin', by golly!
I'm happier than a tornado
Page 60/64
in a trailer park!
I think it's about-a time
we redecorate.
Hi. Lightning McQueen told me
this was the best place in the world
to get tires.
How 'bout setting me and my friends up
with three or four sets each?
Guido! There is a real
Michael Schumacher Ferrari in my store.
A real Ferrari!
Punch me, Guido.
Punch me in the face.
This is the most glorious day
of my life.
Wow. [Italian]
Spero che il tuo amico si riprenda.
Mi dicono che siete fantastici.
- [Sighing]
- [Engine rewing]
[Both chuckle]
Just passin' through?
Actually, I thought I'd stop
and stay awhile.
- I hear this place is back on the map.
- It is?
There's some rumor floating around
that some hotshot Piston Cup racecar
is setting up his big
racing headquarters here.
Really? Ah, well, there goes the town.
You know, I really missed you, Sally.
Well, I create feelings in others
they themselves don't understand and,
- blah, blah, blah.
- [Lightning chuckles]
McQueen and Sally
parked beneath the tree,
K- i-s-s... uh... i- n-t!
Great timing, Mater!
Hep-non, hip-hep, hi-li-lilly! Whee!
He's my best friend.
What're you gonna do?
So, Stickers, last one to Flo's buys?
Page 61/64
I don't know.
Why don't we just take a drive?
Hmm... Nah.
Yeah! Ka-chow!
[John Mayer:
[Yelling]
[Sirens blaring]
[Sniffing] Ah-choo!
[Mater] All right, everybody
please keep together now.
We is now entering the Doc Hudson
wing of the museum.
Wow. Unbelievable.
That many wins in a single season.
He's the real deal, Junior.
The Hudson Hornet was my inspiration.
Excuse me, son.
Is Doc Hudson here today?
Sorry, Mrs. The King, I think Doc
went out for a drive or somethin'.
- [Lightning] Whoo! Whoo!
- [Doc] Yeah!
Well, you sure ain't no dirt boy.
Not today, old man.
I know all your tricks.
[Growls]
Doc! Doc!
Whoo-ah!
[Doc] Not all my tricks, rookie!
[All grumble]
[Cheering]
Attention!
Kiss the pavement goodbye.
When I'm finished, you'll have mud
in places you didn't know you had!
- Yo, I've never been off-road!
- Well, that's gonna change right now!
About face!
Drop and give me 20 miles!
Go! Go!
Go, go, go, go, go! Go!
Man, now I got dirt in my rims!
- [Pole hits metal]
Page 62/64
- Huh? Look at this!
It's my hood! It's my hood!
I ain't seen this thing in 20 years!
Well, it fits perfectly.
How do I look? Ah-choo!
Oh, dang.
You are a toy car!
You are a sad, strange little wagon
and you have my pity. Farewell.
[Woody Car] Oh, yeah?
Well, good riddance, you loony!
Hey, I hate to break up the road rally,
guys, but they're here!
Birthday guests at three o'clock!
[Chuckling] Oh, man! Whoever does
the voice of that piggy truck,
I'm tellin' ya, he's one great actor!
We're banished, genius! Stuck here
in this wasteland without chains!
But, Mike, the Boomobile's in trouble!
She needs our help!
- You're still not listening! [gasping]
- Ah!
Welcome to the Himalayas!
Snow cone?
Oh, that Abominable Snowplow
is quite the comic thespian!
Just get in there.
Go! Go, go, go!
Circus cars?
How can you be circus cars?
These are the lousiest
circus cars in the world,
and they're gonna make me rich!
Wait a minute here.
They're just usin' the same actor
over and over.
What kind of a cut-rate production
is this?
[Brad Paisley:
[Minny moaning]
Oh, for the love of Chrysler, can we
please ask someone for directions?
Page 63/64
No! There's an on-ramp close!
I know it! I can feel i
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
