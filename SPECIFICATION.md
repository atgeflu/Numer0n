# Specification of Numer0n Game

## Introduction

What follows is the functional specification for an implementation of the Numer0n game. https://ja.wikipedia.org/wiki/Numer0n
This is a work in progress.

## Game Play

We will have two main play modes:

### Single Play (guess the numbers chosen by the computer)

In this mode the user simply tries to guess the numbers (three _distinct_ numbers between 0 and 9 (inclusive)) chosen by the computer.

### Player vs Computer

In this mode the player and the computer each choose three _distinct_ numbers between 0 and 9 (inclusive).
Taking turns each guesses the others numbers each time receiving feedback.

#### Additional tournament mode

In tournament mode there are (at most) 3 rounds of games (against increasingly strong) computer opponents. 
If one loses any game we get _game-over_.

## Interface

The entire game is set up as a one-page webpage. 
Per default _Single Play_ is selected.

If user clicks _Player vs Computer_ button the game changes to _Player vs Computer_ play. There the default is _single game mode_. 
If user clicks _Tournament mode_ button then the game changes to _Tournament mode_.

## Game Logic

### Basic Game Play

In its most basic incarnation the game is simply a guess the numbers game. We will describe a sample game player vs computer.
The player is called _Angry Alice_ and the computer shall be known as _Deep Numb_.

Out of the 10 numbers labelled 0-9 (presented as cards on the webpage) _Angry Alice_ chooses three numbers (_Deep Numb_ chooses three numbers as well though does so automatically). 

Afterwards they take turn guessing the other players number.

_Angry Alice_ chose: {4,2,7} (by clicking 3 cards on the webpage (or entering via keyboard))
_Deep Numb_ chose: {2,6,1}

_Angry Alice_'s first guess: {1,2,3} (by clicking 3 cards on the webpage (or entering via keyboard) and clicking the CALL button)
Both 1 and 2 are numbers chosen by _Deep Numb_ but their positions are different, so the result shown on webpage is 2 BITE 0 EAT. 
(the guess history will also be displayed on webpage)

_Deep Numb_'s first guess: {1,2,3}
Only 2 is a number chosen by _Angry Alice_ and it is in the right position as well (2nd position in _Alice_'s choice and 2nd position in guess), so the result is 0 BITE 1 EAT.

Based on the number of BITES and EATS each player tries to deduce the numbers (and their order) that their opponent chose.
The first to reach 3 BITES wins.

####Optional
To help _Alice_ deduce the right numbers we may introduce a way for _Alice_ to mark the likely numbers and their position.

### Advanced Game Play (ITEMS)

There are a number of ITEMS which can be used in this game. (For the most part it might make sense to limit these to tournament play, though it might be good practice having them available in other games as well)

There are a total of 6 items out of which each player may choose 3 in total. The following rules apply:

1. As soon as the opponent called your numbers you may not use an item.
2. Only 1 item may be used per turn.
3. There are attack and defense items. If in one turn the opponent has declared the use of an attack item, one may not use a defense item.
4. One may not hold both HIGH&LOW and SLASH as items

#### Item List

##### Attack items

1. DOUBLE (yellow)
During one's turn one may guess the opponent's numbers twice in a row. But as compensation one has to divulge one of one's own numbers (the opponent chooses which one/position).

2. HIGH&LOW (blue & red)
By using this item the opponent has to inform whether his numbers are HIGH (5-9) or LOW (0-4). For example 809 would be HIGH, LOW, HIGH.

3. TARGET (purple)
One asks the opponent whether a certain number is included in his choice and if it is the opponent has to inform what position it is in. 

4. SLASH (emerald green)
By using this item the opponent has to tell his SLASH number (largest number - smallest number)

##### Defense items

1. SHUFFLE (green)
By using this item one may reorder one's chosen numbers. (eg. {1,4,2} -> {2,1,4}). One may bluff as well, by using this item but not actually rearranging the order of ones numbers.

2. CHANGE (pink)
One may change one of ones numbers, based on the following conditions: one has to inform what position the number is and whether it is HIGH or LOW. The number with which one changes the number also has to be of the same type (HIGH/LOW).




