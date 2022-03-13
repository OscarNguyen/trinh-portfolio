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
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
.home-page {
  .part1{
    .page-container{
      display: flex;
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

          margin-bottom: 3.125rem;
        }

        .quote {
          font-weight: 300;

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
    background-color:#00A3FF;

    .page-container{
      display: flex;
      align-items: center;

      padding: 9.56rem 2rem !important;

      .left{
        p{
          font-family: $heading-font-family;
          color: #fff;
          font-weight: 500;
          font-size: 3rem;
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

              }
            }
          }
        }
      }
    }
  }
}
</style>
