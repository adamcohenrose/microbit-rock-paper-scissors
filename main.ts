function check () {
    if (adam == "rock" && microbit == "paper") {
        music.playMelody("F F E E D D - - ", 120)
        basic.showIcon(IconNames.Square)
    } else if (adam == "rock" && microbit == "scissors") {
        music.playMelody("G G D B B B - - ", 120)
        basic.showIcon(IconNames.Scissors)
    } else if (adam == "paper" && microbit == "scissors") {
        music.playMelody("F F E E D D - - ", 120)
        basic.showIcon(IconNames.Scissors)
    } else if (adam == "paper" && microbit == "rock") {
        music.playMelody("G G D B B B - - ", 120)
        basic.showIcon(IconNames.SmallSquare)
    } else if (adam == "scissors" && microbit == "rock") {
        music.playMelody("F F E E D D - - ", 120)
        basic.showIcon(IconNames.SmallSquare)
    } else if (adam == "scissors" && microbit == "paper") {
        music.playMelody("G G D B B B - - ", 120)
        basic.showIcon(IconNames.Square)
    } else {
        music.playMelody("G G A A G G - - ", 120)
    }
}
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Butterfly)
    music.playTone(262, music.beat(BeatFraction.Eighth))
    basic.pause(500)
    music.playTone(262, music.beat(BeatFraction.Eighth))
    basic.pause(500)
    music.playTone(262, music.beat(BeatFraction.Eighth))
    microbit = choices[randint(0, choices.length - 1)]
})
input.onGesture(Gesture.TiltLeft, function () {
    adam = "paper"
    basic.showIcon(IconNames.Square)
    check()
})
input.onGesture(Gesture.ScreenUp, function () {
    adam = "rock"
    basic.showIcon(IconNames.SmallSquare)
    check()
})
input.onGesture(Gesture.TiltRight, function () {
    adam = "scissors"
    basic.showIcon(IconNames.Scissors)
    check()
})
let microbit = ""
let adam = ""
let choices: string[] = []
choices = ["rock", "paper", "scissors"]
