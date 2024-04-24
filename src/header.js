import React, { useEffect } from 'react';
import { TweenLite, Circ } from 'gsap';
import './static/header.css';
import backgroundImage from '../public/images/Trees.svg';

const Header = () => {
  useEffect(() => {
    let width,
      height,
      largeHeader,
      canvas,
      ctx,
      points,
      target,
      animateHeader = true;

    const initHeader = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      largeHeader = document.getElementById("large-header");
      largeHeader.style.height = height + "px";

      canvas = document.getElementById("demo-canvas");
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d");

      points = [];
      for (let x = 0; x < width; x = x + width / 20) {
        for (let y = 0; y < height; y = y + height / 20) {
          let px = x + (Math.random() * width) / 20;
          let py = y + (Math.random() * height) / 20;
          let p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      for (let i = 0; i < points.length; i++) {
        let closest = [];
        let p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          let p2 = points[j];
          if (p1 !== p2) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      for (let i = 0; i < points.length; i++) {
        let c = new Circle(
          points[i],
          2 + Math.random() * 2,
          "rgba(255,255,255,0.3)"
        );
        points[i].circle = c;
      }
    };

    const addListeners = () => {
      if (!("ontouchstart" in window)) {
        window.addEventListener("mousemove", mouseMove);
      }
      window.addEventListener("scroll", scrollCheck);
      window.addEventListener("resize", resize);
    };

    const mouseMove = (e) => {
      let posx = 0,
        posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    };

    const scrollCheck = () => {
      if (document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height + "px";
      canvas.width = width;
      canvas.height = height;
    };

    const initAnimation = () => {
      animate();
      for (let i = 0; i < points.length; i++) {
        shiftPoint(points[i]);
      }
    };

    const animate = () => {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < points.length; i++) {
          if (Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.6;
          } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    };

    const shiftPoint = (p) => {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: function () {
          shiftPoint(p);
        }
      });
    };

    const drawLines = (p) => {
      if (!p.active) return;
      for (let i = 0; i < p.closest.length; i++) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
        ctx.stroke();
      }
    };

    function Circle(pos, rad, color) {
      var _this = this;

      (function () {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
      })();

      this.draw = function () {
        if (!_this.active) return;
        ctx.beginPath();
        ctx.arc(
          _this.pos.x,
          _this.pos.y,
          _this.radius,
          0,
          2 * Math.PI,
          false
        );
        ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
        ctx.fill();
      };
    }

    const getDistance = (p1, p2) => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    // TypeWriter Class for text animation
    class TypeWriter {
      constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
      }

      type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 300;
        if (this.isDeleting) {
          typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          typeSpeed = this.wait;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.wordIndex++;
          typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
      }
    }

    // Initialize the TypeWriter
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);

    initHeader();
    initAnimation();
    addListeners();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, []); 

  return (
    <div id='large-header' className='large-header'>
      <canvas id='demo-canvas'></canvas>
      <div className='main-titles'>
        <h1 className='main-title'><span className='thin1'>Hey there, I'm </span>Abdiel <span className='thin'>J.Wilson</span></h1>
        
        <h1 className='write'>I write {' '}
          <span className="txt-type" data-wait="500" data-words='["Laravel", "Python", "C", "JavaScript", "Django"]'></span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
