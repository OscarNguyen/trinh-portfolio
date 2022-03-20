<template>
  <div class="home-page ">
    <div class="part1">
      <div class="page-container">
        <div class="left">
          <h1><span>HELLO</span>, I'm Trinh</h1>
          <p class="intro">
            Hi, I am Trinh, a visual designer whose designs focus on accessibility and minimalism. I want to become a product designer to create products that win hearts, balance beauty and utility.
          </p>
          <p class="quote">
            “ Make it simple, but accessible” -- Trinh Dinh “ Make it simple, but accessible” -- Trinh Dinh
          </p>
          <div>
            <button class="btn btn-primary">
              Read More
            </button>
          </div>
        </div>
        <div class="right">
          <div class="desktop">
            <img src="/images/keyboard-1.png" alt="">
          </div>
          <div class="eclipse">
            <img src="/images/Ellipse31.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="page-container">
        <div class="left">
          <p>
            10+LOGOS’S DESIGN PROJECTS AND BRANDING
            2 YEARS EXPERIENCE IN FREELANCING PROJECTS,
            AND VISUAL DESIGN.
          </p>
        </div>
        <div class="right">
          <div class="circle">
            <div class="content">
              <p class="figure">
                100%
              </p>
              <p class="text">
                Work Done
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part3">
      <div class="page-container">
        <div class="left">
          <div class="abstract-img">
            <img src="/images/Abstract_background_4_1.png" alt="">
          </div>
          <h2>Introduction</h2>
          <div class="marble-circle">
            <img src="/images/Circle_Intro.png" alt="">
          </div>
          <p>My name is Trinh, a user interface and visual designer who looks to storm into the market by creating an accessible design that enables people with the beauty of respect and worth. I am excited to pursuit creative design, dedicate myself to bring value to any projects that I will join.</p>

          <p>As a young designer, I am continuously learning and discovering essential skills from digital graphics, illustration, UX/UI and further in Blender or other graphic tools that can support my work.</p>

          <p>
            My long-term goal is to bring the best and sustainable design to customers that help potential customers become companies' buyers and experience perfect user flows.
          </p>

          <p>Truth be told, I am not an intelligent learner; however, I am always optimistic. I believe that we all have our power and the most important thing is to nurture and arouse it to grow strongly. And when it increases significantly, it will become an indomitable spirit to help us get over any challenges. I am convinced that I can achieve valuable knowledge, develop more in design career path, and create accessible products for society. </p>
          <p>
            Steve Jobs once said, "Design is not just what it looks like and feels like. Design is how it works". And truth, I am here with a positive thought, pat myself on the back, "I can find how it works, I can do it".
          </p>
        </div>
        <div class="right">
          <div class="abstract-img not-circle">
            <img src="/images/Abstract_background_4_2.png" alt="">
          </div>
          <div class="abstract-img circle">
            <img src="/images/Circle_on_homepage.png" alt="">
          </div>
          <div class="avatar">
            <img src="/images/TrinhPhoto.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="part4">
      <div class="page-container">
        <div class="left">
          <div class="abstract-img">
            <img src="/images/Trinh_Background_port_1.png" alt="">
          </div>
        </div>
        <div class="right">
          <h2>Work</h2>
          <div class="marble-circle">
            <img src="/images/Circle_on_homepage-2.png" alt="">
          </div>
          <p>I focus on UI design by applying graphic design and UX design knowledge to communicate and understand expectations from my clients and my team. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
.home-page {
  .page-container{
    display: flex
  }

  .abstract-img{
      position: absolute;
      z-index: -1;

      img{
        max-width: 100%;
      }
  }

  .marble-circle{
      width: 7%;

      transform: translateX(-2.5rem);

      img{
        max-width: 100%;
      }

      &::after{
        content: "";
        width: 4.5rem;
        height: 0.1rem;
        top: 50%;
        background: $theme-color-2;

        position: absolute;

      }
  }

  .part1{
    .page-container{
      align-items: center;

      .left {
        h1{
          font-weight: 500;
          font-size: 6rem;

          margin-bottom: 3.125rem;

          span {
            color: #F9A80D;
          }
        }

        .intro {
          letter-spacing: 0.0015em;
          line-height: 1.5rem;
          font-weight: 500;
          font-size: 1.25rem;

          margin-bottom: 3.125rem;
        }

        .quote {
          font-weight: 300;
          font-size: 1.25rem;

          margin-bottom: 3.125rem;

        }
      }

      .right{
        position: relative;

        .desktop{
          width: 45rem;

          img{
            max-width: 100%;
          }
        }

        .eclipse{
          position: absolute;
          top: 34%;
          right: 11%;
          z-index: -1;

          img{
            max-width: 100%;
          }
        }
      }
    }
  }

  .part2{
    background-color:$theme-color-2;

    .page-container{
      align-items: center;

      padding: 9.56rem 2rem !important;

      .left{
        p{
          font-family: $heading-font-family;
          color: #fff;
          font-weight: 500;
          font-size: 3rem;

          width: 90%;
        }
      }

      .right{
        .circle{
          position: relative;

          filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.14)) drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.12)) drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2));

          border: 3px solid #F9CD00;
          border-radius: 50%;
          width: 11.125rem;
          height: 11.125rem;

          .content{
            position: absolute;
            left: 20%;
            top: 20%;

            p{
              color: #fff;
              text-align: center;

              margin-bottom: -1rem;

              &.figure{
                font-family: $roboto-font-family;
                font-weight: 500;
                font-size: 3rem;
              }

              &.text{
                font-family: $heading-font-family;
                font-weight: 500;
                font-size: 1.25rem;

                margin: auto 1.3rem auto 0;

              }
            }
          }
        }
      }
    }
  }

  .part3{
    .page-container{
      padding: 1.875rem 2rem !important;

      .left{
        position: relative;

        width: 50%;

        .abstract-img{
          left: -4rem;
          top: 15rem;
        }

        .marble-circle{
          margin-top: -1rem;
        }
      }

      .right{
        position: relative;
        flex: 1;

        img{
          float: right;
        }

        .abstract-img{
          &.not-circle{
            right: 10rem;
          }

          &.circle{
            bottom: -5rem;
            right: -5rem;
            z-index: 0;
          }
        }
      }
    }
  }

  .part4{
    .page-container{
      width: 60% !important;

      .left{
        width: 45% !important;

        .abstract-img{
          position: relative;
        }
      }

      .right{
        position: relative;

        flex:1;

        .marble-circle{
          transform: translateX(-98%);
          margin-top: -1.3rem;
        }
      }
    }
  }
}
</style>
