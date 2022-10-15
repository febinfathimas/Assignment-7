//STEP 1
var strArray=["Avatar","God Father","Jurassic Park","Water World","Lord Of The Rings"];
console.log("Step1-The second Movie of StringArray is  "+strArray[1]);

//STEP 2
var conArray=new Array(5);

conArray[0]="Lost World";
conArray[1]="The Lobster";
conArray[2]=" The Silence Of The Lamp";
conArray[3]="Apocalypto";
conArray[4]="Hidden Figures";
console.log("\n Step2-The First Movie of Constructor Array is   "+conArray[0]);


//STEP 3
var replace=conArray[2];
conArray[2]="Mentalist";
console.log("\n Step3-The new length of Constructor Array is "+conArray.push(replace)+"  and Array displaying below");
console.log(conArray);


//STEP 4
var movies=[];
movies[0]="Movie1";
movies[1]="Movie2";
movies[2]="Movie3";
movies[3]="Movie4";
movies[4]="Movie5";
delete movies[0];
console.log("\n Step4-Displaying movies from the array after deleting first element  ");
console.log(movies);


//STEP 5
var moviesStep5=[],i;
moviesStep5[0]="World-1";
moviesStep5[1]="Earth-2";
moviesStep5[2]="College-3";
moviesStep5[3]="University-4";
moviesStep5[4]="Reference-5";
moviesStep5[5]="Tutorial-6";
moviesStep5[6]="Grades-7";
console.log("\n Step5- Displaying movies from the array using for loop ");
for(i=0;i<moviesStep5.length;i+=1)
{
    console.log(moviesStep5[i]);
}


//STEP 6
console.log("\n Step6- Displaying movies from the array using for in  loop ");
moviesStep5=moviesStep5.sort();
for(i in moviesStep5){
    console.log(moviesStep5[i]);
}


//STEP 7
console.log("\n Step7- Displaying movies from the array using for in  loop in a sorted form");
for(i in moviesStep5){
    console.log(moviesStep5[i]);
}


//STEP 8
var leastFavMovies=[];
leastFavMovies[0]="Dirty";
leastFavMovies[1]="Boring";
leastFavMovies[2]="Horrible";
console.log("\n -----Step8----\n\n Movies I Like:\n\n");
for(i=0;i<moviesStep5.length;i+=1)
{
    console.log(moviesStep5[i]);
}
console.log("\n Movies I Regret Watching:\n\n");
for(i=0;i<leastFavMovies.length;i+=1)
{
    console.log(leastFavMovies[i]);
}



//STEP 9
console.log("\n Step9- Displaying the array after joining two arrays in sorted reverse order");
var movieJoin=moviesStep5.concat(leastFavMovies);
movieJoin=movieJoin.sort();
movieJoin=movieJoin.reverse();
for(i=0;i<movieJoin.length;i+=1)
{
    console.log(movieJoin[i]);
}

//STEP 10
var leng=movieJoin.length-1;
console.log("\n Step10- Displaying the last element of the joined array using array function slice");
console.log(movieJoin.slice(leng));


