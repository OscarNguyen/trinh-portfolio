<template>
  <div class="home-page ">
    <div class="part1">
      <div class="page-container d-flex">
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
      <div class="page-container d-flex">
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
      <div class="page-container d-flex">
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
      <div class="page-container d-flex">
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
    <div class="part5">
      <div class="page-container">
        <h2>My Skills</h2>
        <div class="skills d-flex justify-content-between">
          <div v-for="skill of skillList" :key="skill.text" :style="{background:skill.background}" class="skill d-flex justify-content-center ">
            <div class="icon">
              <img :src="skill.iconPath" alt="">
            </div>
            <span>{{ skill.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      skillList: [
        {
          iconPath: '/images/pencil-icon.png',
          text: 'Illustration',
          background: '#F9A80D'
        },
        {
          iconPath: '/images/pen-icon.png',
          text: 'Branding Design',
          background: '#00A3FF'

        },
        {
          iconPath: '/images/pc-phone-icon.png',
          text: 'UX/UI Design',
          background: '#005180'

        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  // .page-container{
  //   display: flex
  // }

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
      padding: 0 16rem !important;

      .left{
        .abstract-img{
          position: relative;
          z-index: -1;

          transform: translateY(7rem)
        }
      }

      .right{
        position: relative;

        padding-left: 5rem;

        .marble-circle{
          transform: translateX(-98%);
          margin-top: -1.3rem;
        }
      }
    }
  }

  .part5{
    .page-container{
      .skills{
        margin-top: 1.875rem;

        .skill{
          width: 32%;
          padding: 9rem 6rem;

          color: $button-text-color ;
          font-family: $heading-font-family;

          box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);

          border-radius: .625rem;

          .icon{
            img{
              max-width: 100%;
              min-width: 100%;
            }
          }

          span{
            font-weight: 500;
            font-size: 2.125rem;
            line-height: 2.5rem;
            letter-spacing: 0.0025em;

            padding-left: 1.25rem;
          }
        }
      }
    }
  }
}
</style>
