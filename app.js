document.addEventListener('DOMContentLoaded', ()=>{
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')
    const width = 28
    let score = 0;
    // layout
    // legend
    // 0 - pac dot
    // 1 wall
    // 2 - ghost lair
    // 3 - power pellet
    // 4 - empty

    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]

    const squares = [];

    function createBoard() {
        for (let i = 0; i < layout.length; i++){
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)
            
            if(layout[i] === 0){
                squares[i].classList.add('pac-dot')
            } else if (layout[i] === 1){
                squares[i].classList.add('wall')
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair')
            } else if (layout[i] === 3){
                squares[i].classList.add('power-pellet')
            }
        }
    }

    createBoard()
    let pacmanCurrentIndex = 490
    const pacmanEye = document.createElement('div')
    const pacmanMouth = document.createElement('div')
    squares[pacmanCurrentIndex].classList.add('pac-man')
    squares[pacmanCurrentIndex].appendChild(pacmanEye)
    squares[pacmanCurrentIndex].appendChild(pacmanMouth)
    pacmanEye.classList.add('pacman-eye')
    pacmanMouth.classList.add('pacman-mouth')

    function movePacman(e){
        squares[pacmanCurrentIndex].classList.remove('pac-man')
        switch(e.keyCode){
            case 37:
                if(
                  pacmanCurrentIndex % width !== 0 &&
                  !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
                  !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair') 
                )
                pacmanCurrentIndex -= 1
                if ( squares[pacmanCurrentIndex -1] === squares[363]){
                    pacmanCurrentIndex = 391
                }
                break
            case 38:
                if(
                    pacmanCurrentIndex - width >= 0 &&
                    !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
                )
                pacmanCurrentIndex -= width
                break
            case 39:
                if(
                    pacmanCurrentIndex - width >= 0 &&
                    !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
                )
                pacmanCurrentIndex += 1
                if ( squares[pacmanCurrentIndex +1] === squares[392]) {
                    pacmanCurrentIndex = 364
                }
                break
            case 40:
                if ( 
                    pacmanCurrentIndex + width < width * width &&
                    !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') 
                )
                pacmanCurrentIndex += width
                break
        }
        squares[pacmanCurrentIndex].classList.add('pac-man')
        pacDotEaten();
        powerPelletEaten();
        checkForGameOver();
        checkforWin();
    }

    document.addEventListener('keyup', movePacman)
    
    function pacDotEaten() {
        if( squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
            score++
            scoreDisplay.innerHTML = score;
            squares[pacmanCurrentIndex].classList.remove('pac-dot');
        }
    }

    function powerPelletEaten() {
        if( squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
            score+=10
            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScareGhosts, 10000)
            squares[pacmanCurrentIndex].classList.remove('power-pellet');
        }
    }

    function unScareGhosts() {
        ghosts.forEach(ghost => {
            ghost.isScared = false
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex = ghost.startIndex
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        })
    }

    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className;
            this.startIndex = startIndex;
            this.speed = speed;
            this.currentIndex = startIndex;
            this.isScared = false
            this.timerId = NaN
        }
    }

    ghosts = [
        new Ghost('blinky', 348, 300),
        new Ghost('pinky', 376, 300),
        new Ghost('inky', 351, 300),
        new Ghost('clyde', 379, 300)
    ]

    // draw the ghsot on the grid
    ghosts.forEach(ghost =>{
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
    })

    ghosts.forEach(ghost=> moveGhost(ghost))

    //get the coordinates of pacman or blinky on the grid with X and Y axis
    function getCoordinates(index) {
        return [index % width, Math.floor(index / width)]
    }

    function moveGhost(ghost) {
        const directions = [-1 , +1, +width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(function() {

            if (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
             !squares[ghost.currentIndex + direction].classList.contains('wall')
            ) {
                // remove the ghost classes
                squares[ghost.currentIndex].classList.remove(ghost.className);
                squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost');
                
                //move into the space
                const [ghostX, ghostY] = getCoordinates(ghost.currentIndex)
                const [pacmanX, pacmanY] = getCoordinates(pacmanCurrentIndex)
                const [ghostNextX, ghostNextY] = getCoordinates(ghost.currentIndex + direction)
                function isXCoordCloser() {
                    if ((ghostNextX - pacmanX) > (ghostX - pacmanX)){
                      return true
                    } else return false
                }

                function isYCoordCloser() {
                    if ((ghostNextY - pacmanY) > (ghostY - pacmanY)) {
                        return true
                    } else return false
                }

                if (isXCoordCloser() || isYCoordCloser()) {
                    ghost.currentIndex += direction
                    squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        
                } else {
                    squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
                    direction = directions[Math.floor(Math.random() * directions.length)]
                }
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            } else {
                direction = directions[Math.floor(Math.random() * directions.length)]
                if (direction < 0) {
                    direction +=1
                }
            }
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }

            if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex = ghost.startIndex
                score +=100
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
            }

            checkForGameOver();
        }, ghost.speed)
    }

    function checkForGameOver() {
        if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
            !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
        ) {
           ghosts.forEach(ghost=> clearInterval(ghost.timerId))
           document.removeEventListener('keyup', movePacman)
           resultDisplay.innerHTML = "Game Over!" 
        }

    }

    function checkforWin() {
        if(score === 274) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            resultDisplay.innerHTML = "You have WON!"
        }
    }
})