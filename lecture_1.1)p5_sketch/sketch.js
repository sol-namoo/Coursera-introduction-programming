//You can look up more commands here ... https://p5js.org/reference/

let snowflakes = []; // 눈송이 객체를 담는 배열

// snowflake 클래스
function snowflake() {
    // 좌표값 초기화
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 5);
    
    // 방사형 눈송이의 반지름
    // 눈송이를 화면에 고루 퍼뜨리기 위해 선택
    this.radius = sqrt(random(pow(width / 2, 2)));
    
    this.update = function(time) {
        // 원형을 따라다니는 x 위치
        let w = 0.6; // 각속도
        let angle = w * time + this.initialangle;
        this.posX = width / 2 + this.radius * sin(angle);
    
        // 크기가 다른 눈송이가 미묘하게 다른 y 속도로 떨어집니다.
        this.posY += pow(this.size, 0.5);
    
        // 화면 하단을 지나친 눈송이는 삭제
        if (this.posY > height) {
        let index = snowflakes.indexOf(this);
        snowflakes.splice(index, 1);
        }
    };
    
    this.display = function() {
        ellipse(this.posX, this.posY, this.size);
    };
    }  

function setup()
{
    //this function runs once at the start of your program
    //this command creates a drawing area in the browser - it should only be called once
    createCanvas(500,500);
    fill(240);
    noStroke();
}

function draw(){
    //this command clears the background to black (try changing the numbers)
    background('navy');
    let t = frameCount / 60; // 시간 업데이트

    // 매 프라임마다 무작위 개수의 눈송이 생성
  for (let i = 0; i < random(3); i++) {
    snowflakes.push(new snowflake()); // 눈송이 객체 추가
  }
    // for 반복문을 사용하여 눈송이 반복
  for (let flake of snowflakes) {
    flake.update(t); // 눈송이 위치 업데이트
    flake.display(); // 눈송이 그리기
  }
}