Anton Yashin
Junior Fullstack Developer
Contact information:
Phone: +7 (926) 098-76-66
E-mail: atoshkoo@gmail.com
Telegram: @antoshkooo
LinkedIn

Briefly About Myself:
Some text about me

Skills and Proficiency:
HTML5, CSS3
JavaScript Basics
Git, GitHub
IntelliJ IDEA, VS Code
Adobe Photoshop, Illustrator

Code example:
Sort the odd KATA from CODEWARS: You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Test cases:
`code
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
`code

`code
def sort_array(source_array):
    even = [x for x in source_array if x % 2 == 0]
    odd = sorted([x for x in source_array if x % 2 != 0])
    for i in even:
        odd.insert(source_array.index(i), i)
    return odd
`code

Courses:
Skillbox Python + Django Framework (completed)
RS Schools Course «JavaScript/Front-end. Stage 1» (in progress)
Rebrains Linux Basic (in progress)
