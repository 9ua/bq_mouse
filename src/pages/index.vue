<template>
  <div class="container">
    <div class="top-nav">
      <a href="https://zowie.benq.com/en-us" target="_self" style="padding:5px 30px">
                        <svg id="zowie_logo" width="120" height="60" viewBox="0 0 140.625 39.751">
                            <path fill="#D4003B" d="M39.704,33.709H14.245c-4.521,0-8.174-3.66-8.174-8.165c0-4.506,3.653-8.182,8.174-8.182h14.207
                            c1.689,0,3.062-1.367,3.062-3.063c0-1.68-1.373-3.055-3.062-3.055H14.245c-7.891,0-14.307,6.409-14.307,14.3
                            c0,7.882,6.416,14.306,14.307,14.306h25.459c1.688,0,3.055-1.381,3.055-3.07C42.759,35.084,41.392,33.709,39.704,33.709"></path>
                            <path fill="#D4003B" d="M28.467,0H3.001C1.304,0-0.062,1.39-0.062,3.063c0,1.695,1.366,3.07,3.063,3.07h25.466
                            c4.505,0,8.167,3.668,8.167,8.165c0,4.506-3.662,8.182-8.167,8.182H14.253c-1.689,0-3.055,1.375-3.055,3.063
                            c0,1.689,1.366,3.062,3.055,3.062h14.214c7.882,0,14.292-6.416,14.292-14.307C42.759,6.424,36.349,0,28.467,0"></path>
                            <path fill="#FFFFFF" d="M108.688,0v12.856c0,1.719-1.39,3.109-3.102,3.109h-2.578V0h-2.717v15.965h-2.594
                            c-1.705,0-3.093-1.39-3.093-3.109V0h-2.725v12.856c0,3.216,2.61,5.833,5.818,5.833h8.55c3.208,0,5.166-2.617,5.166-5.833V0H108.688z
                            "></path>
                            <path fill="#FFFFFF" d="M79.099,2.74c-3.659,0-6.638,2.978-6.638,6.631c0,3.662,2.979,6.632,6.638,6.632
                            c3.654,0,6.625-2.97,6.625-6.632C85.724,5.718,82.753,2.74,79.099,2.74 M79.099,18.743c-5.172,0-9.37-4.206-9.37-9.372
                            c0-5.157,4.198-9.371,9.37-9.371c5.166,0,9.357,4.214,9.357,9.371C88.456,14.537,84.265,18.743,79.099,18.743"></path>
                            <rect x="116.87" fill="#FFFFFF" width="2.724" height="18.713"></rect>
                            <path fill="#FFFFFF" d="M54.516,14.89c0-0.43,0.231-0.821,0.6-1.028l10.675-6.701l0.046-0.023c1.097-0.722,1.773-1.933,1.773-3.254
                            C67.61,1.751,65.86,0,63.726,0H51.8v2.725h11.926c0.645,0,1.167,0.514,1.167,1.159c0,0.391-0.2,0.745-0.514,0.967L53.795,11.49
                            c-1.229,0.822-1.995,1.988-1.995,3.4c0,2.126,1.734,3.869,3.875,3.869h11.828v-2.718H55.675
                            C55.038,16.041,54.516,15.52,54.516,14.89"></path>
                            <path fill="#FFFFFF" d="M129.411,2.771h11.252V0h-11.252c-2.564,0-4.659,2.095-4.659,4.667v9.371c0,2.571,2.08,4.651,4.651,4.651
                            h11.26v-2.771h-11.26c-1.043,0-1.881-0.837-1.881-1.873v-3.301h13.141v-2.77h-13.141V4.667
                            C127.522,3.623,128.375,2.771,129.411,2.771"></path>
                        </svg>         
                        </a>

          <div style="float:right; line-height:54px;">
            <ul style="padding-right:40px">
              <li class="nav"><a href="https://zowie.benq.com/en-us/product/mouse.html" style="text-decoration:none;">PRODUCT</a></li> 
              <li class="nav"><a href="https://zowie.benq.com/en-us/product/mouse.html" style="text-decoration:none;">WHERE TO BUY</a></li> 
              <li class="nav"><a href="https://zowie.benq.com/en-us/news.html" style="text-decoration:none;">NEWS</a></li> 
              <li class="nav"><a href="https://zowie.benq.com/en-us/support.html" style="text-decoration:none;">SUPPORT</a></li> 
              <li class="nav"><a href="https://zowie.benq.com/en-us/knowledge.html" style="text-decoration:none;">KNOWLEDGE CENTER</a></li> 
            </ul>
          </div>
    </div>
    <img src="@/assets/images/cover-banner-1920-315.jpg" @click="bannerClick(info)" style="width:100%;height:auto; margin-top:60px;">
  <div style="background:#232323; padding:50px 0">
    <div class="content">
      <h1 style="font-weight:400;color:#B12741;font-size: 30px;line-height: 37px;padding:30px 0;">Set your preference and see the mice you might like.</h1>
      <!-- <p style="color:#fff;font-size: 18px;line-height: 22px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iure.</p> -->
    </div>

    <!-- Radio button -->
    <div class="content">
      <ul class="ul-c" style="padding-top: 16px">
        <li style="font-size:16px;line-height:19px;margin:22px 0;">
          <div class="radio-beauty-container">
            <p style="color:#fff;"><b style="font-weight: bold; font-size: 18px;line-height: 22px;"> Shape：</b>
          <label style="margin: 0 40px">
              <input type="radio" name="shape" id="radioName1" hidden value="a" v-model="radio.shape"/>
              <label for="radioName1" class="radio-beauty"></label>
              <span class="radio-name">Ergonomic</span>
          </label>
          <label>
              <input type="radio" name="shape" id="radioName2" hidden value="b" v-model="radio.shape"/>
              <label for="radioName2" class="radio-beauty"></label>
              <span class="radio-name">Ambidextrous</span>
          </label>
          </p>
          </div>
        </li>
        <li >
          <div class="radio-beauty-container">
            <p style="color:#fff;"><b style="font-weight: bold; font-size: 18px;line-height: 22px;"> Coating：</b>
          <label style="margin: 0 40px">
              <input type="radio" name="coating" id="radioName3" hidden value="c" v-model="radio.coating"/>
              <label for="radioName3" class="radio-beauty"></label>
              <span class="radio-name">Standard</span>
          </label>
          <label>
              <input type="radio" name="coating" id="radioName4" hidden value="d" v-model="radio.coating"/>
              <label for="radioName4" class="radio-beauty"></label>
              <span class="radio-name">Glossy</span>
          </label>
          </p>
          </div>
        </li>
      </ul>
      <br>
      <div class="links">
        <a
          target="_self"
          class="button--mouse"
          @click.prevent="handleSearch"
        >
          Search
        </a>
        <a
          target="_blank"
          class="button--mouse"
          @click.prevent="handleClear"
        >
          Clear
        </a>
      </div>
    </div>

    <!-- Mouse Table -->
    <section v-if="secondArea">
      <div class="content2" style="background:#000;padding:10px 30px;margin-top:40px;margin-bottom:10px">
        <h1 style="font-weight:400;color:#B12741;font-size: 30px;line-height: 37px;padding:30px 0;">Select 2 models to compare.</h1>
        <!-- <p style="color:#fff;font-size: 18px;line-height: 22px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iure.</p> -->
        
        <div class="formhead"> </div>
        <div class="formhead"> EC Series</div>
        <div class="formhead"> FK Series</div>
        <div class="formhead"> ZA Series</div>
        <div class="formhead"> S Series</div>
        <ul style="padding:0px">
          <li v-for="(item,index) in itemlist" :key="index" style="position: relative;min-height:230px;background: #FFFFFF;border: 1px solid #000000;width:20%;float:left;text-align:center;padding:26px 17px">
            <div class="divMask" style="overflow: hidden;" v-if="item.showtime != false || item.covered != false"></div>
            <div @click="select(item,index)">
              <span style="font-size: 26px;line-height: 30px;text-align: center;">{{item.name}}</span>
              <div style="height:80px;width:100%" v-if="item.name != ''">
                <div style="border-radius: 3px;width:40px;height:40px;border:3px #888 solid;position:related;float:left" v-if="item.covered != true && item.showtime != true ">
                    <div style="background:#CC0040;height:100%" v-if="modelTwo == item.name"><div class="checked"></div></div>
                    <div style="background:#000;height:100%" v-if="modelOne == item.name"><div class="checked"></div></div>
                </div>
                <img :src='"@/assets/images/"+item.pic1+".png"' style="width:118px;height:80px;" v-if="picMode == 1">
                <img :src='"@/assets/images/"+item.pic2+".png"' style="width:118px;height:80px;" v-if="picMode == 2">
              </div>
              <span style="font-size: 36px;line-height:" v-if="item.title != null"><br><br>{{item.title}}</span>
              <p style="text-align:left;font-size: 14px;line-height: 16px;">{{item.content}}</p>
            </div>
          </li>
        </ul>
        
        <a
          target="_self"
          class="button--mouse"
          style="float:right; margin:20px 0;width:185px"
          @click.prevent="secondClear"
        >
          Remove All
        </a>
        <div style="clear:both;"></div>
      </div>
    </section>
</div>
    <section style="padding-top:60px;padding-bottom:60px; background:#fff" v-if="modelOne != ''">
    <div class="content">
     <div style="width:100%">
        <h1 style="font-weight:400;color:#B12741;font-size: 30px;line-height: 37px;padding:30px 0;">Results</h1>
     </div>
     <div style="width=100%; line-height:60px">
        <a v-if="modelTwo != ''"
          target="_self"
          class="button--switch"
          @click.prevent="handleSwitch"
        >
          Switch
        </a>
        <a v-if="modelTwo == ''"
          target="_self"
          class="button--switch"
          style="background: #ccc;border-color:#ccc"
        >
          Switch
        </a>
        <p v-if="modelTwo != ''" class="result"> {{modelTwo}}</p>
        <p v-if="modelOne != ''"  class="result"> {{modelOne}}</p>
      <div style="clear:both"></div>
     </div>
     <div style="width:100%;padding:15px 0">
        <h2 style="font-weight:400;font-weight: bold;font-size: 18px;line-height: 22px;">Shape Comparison</h2>
     </div>
      <div style="width:100%; height: 400px">
        <img :src='"@/assets/images/"+configFile[modelOne].pic_top+".png"' style="z-index:1;position:absolute;width:550px;height:auto;">
        <img :src='"@/assets/images/"+configFile[modelOne].pic_right+".png"' style="z-index:1;position:absolute;margin-left:550px;width:550px;height:auto;">
        <img v-if="modelTwo != ''" :src='"@/assets/images/"+configFile[modelTwo].pic_red_top+".png"' style="z-index:3;position:absolute;width:550px;height:auto;">
        <img v-if="modelTwo != ''" :src='"@/assets/images/"+configFile[modelTwo].pic_red_right+".png"' style="z-index:3;position:absolute;margin-left:550px;width:550px;height:auto;">
      </div>
      <div style="width:100%;">
        <div style="width:420px; float:left">
          <h3 style="font-weight: bold;font-size: 18px;line-height: 22px;">About {{modelOne}}</h3>
          <p style="padding:20px 0 50px;font-size:14px"> {{configFile[modelOne].description}}</p>
          <h3 v-if="modelTwo != ''" style="font-weight: bold;font-size: 18px;line-height: 22px;">About {{modelTwo}}</h3>
          <p v-if="modelTwo != ''" style="padding:20px 0 50px;font-size:14px"> {{configFile[modelTwo].description}}</p>
        </div>
        <div style="width:50%;padding:0 40px 60px;float:right">
          <div style="background:#ddd; width:99%;text-align:center;line-height:40px;border:1px #000 solid;">Measurement</div>
          <ul style="padding:0;text-align:center">
            <li style="border:1px #000 solid;height:40px;line-height:40px;width:33%;float:left">(mm)</li>
            <li style="border:1px #000 solid;height:40px;line-height:40px;width:33%;float:left;color:#CC0040"> {{modelOneSeries}}</li>
            <li style="border:1px #000 solid;height:40px;line-height:40px;width:33%;float:left;color:#CC0040"> {{modelTwoSeries}}</li>
            <li style="border:1px #000 solid;height:40px;line-height:40px;width:33%;float:left">Length</li>
            <li style="border:1px #000 solid;height:40px;line-height:40px;width:33%;float:left">{{configFile[modelOne].length}}</li>
            <li style="border:1px #000 solid;height:40px;line-height:40px;width:33%;float:left" v-if="modelTwo !=''" >{{configFile[modelTwo].length}}</li>
            <li style="border:1px #000 solid;height:40px;line-height:40px;width:33%;float:left" v-else >-</li>
            <li style="border:1px #000 solid;line-height:40px;width:33%;float:left">Height</li>
            <li style="border:1px #000 solid;line-height:40px;width:33%;float:left">{{configFile[modelOne].height}}</li>
            <li style="border:1px #000 solid;line-height:40px;width:33%;float:left"  v-if="modelTwo !=''">{{configFile[modelTwo].height}}</li>
            <li style="border:1px #000 solid;line-height:40px;width:33%;float:left"  v-else>-</li>
            <li style="border:1px #000 solid;line-height:40px;width:33%;float:left">Width(Middle)</li>
            <li style="border:1px #000 solid;line-height:40px;width:33%;float:left">{{configFile[modelOne].width}}</li>
            <li style="border:1px #000 solid;line-height:40px;width:33%;float:left"  v-if="modelTwo !=''">{{configFile[modelTwo].width}}</li>
            <li style="border:1px #000 solid;line-height:40px;width:33%;float:left"  v-else>-</li>

          </ul>
        </div>
        <div style="clear:both"></div>
      </div>
      <div style="width:100%;background:#e8e8e8;padding:40px 40px" v-if="modelOne != '' && modelTwo !=''">
        <p class="text-wrapper">{{ this.featureDescription }}</p>
      </div>
      <div style="width:100%;padding:40px 40px" v-if="modelOne != '' && modelTwo !=''">
        <div style="width:20%;height:20px;float:left"> </div>
        <div style="width:30%;height:auto;float:left;text-align:center;"> 
          <h1 style="font-size: 30px;line-height: 37px;text-align: center;color: #CC0044;">{{modelOne}}</h1>
          <img :src='"@/assets/images/"+configFile[modelOne].pic_right+".png"' style="width:100%;height:auto;">
          <a 
            target="_self"
            class="button--switch"
            style="float:none;margin:0;padding:10px; 20px;"
            :href='configFile[modelOne].link'
          >
          Learn More
          </a>
        </div>
        <div style="width:30%;height:20px;float:left;text-align:center;"> 
          <h1 style="font-size: 30px;line-height: 37px;text-align: center;color: #CC0044;">{{modelTwo}}</h1>
          <img :src='"@/assets/images/"+configFile[modelTwo].pic_right+".png"' style="width:100%;height:auto;">
          <a 
            target="_self"
            class="button--switch"
            style="float:none;margin:0;padding:10px; 20px;"
            :href='configFile[modelTwo].link'
          >
          Learn More
          </a>
        </div>
        <div style="width:20%;height:20px;float:left"> </div>
        <div style="clear:both"></div>
      </div>
    </div>
    </section>

        <div style="width:100%;background:#fff;float:bottom;position:absolute;">
          <div class="content">
          <div style="width:100%">
          <div style="width:180px;height:220px;float:left;padding:40px 0">
            <ul style="padding:0">
              <li style="padding-bottom:20px"><h4>Products</h4></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px;" href="https://zowie.benq.com/en-us/product/monitor.html">Monitor</a></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px" href="https://zowie.benq.com/en-us/product/mouse.html">Mouse</a></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px" href="https://zowie.benq.com/en-us/product/mouse-pad.html">Mouse Pad</a></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px" href="https://zowie.benq.com/en-us/product/keyboard.html">Keyboard</a></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px" href="https://zowie.benq.com/en-us/product/audio-system.html">Audio System</a></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px" href="https://zowie.benq.com/en-us/product/accessory.html">Accessory</a></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px" href="https://zowie.benq.com/en-us/product/divina.html">DIVINA</a></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px" href="https://zowie.benq.com/en-us/product/zone.html">ZONE</a></li>
            </ul>
          </div>
          <div style="width:180px;height:220px;float:left;padding:40px 0">
            <ul style="padding:0">
              <li><a style="text-decoration:none;color:#000" href="https://zowie.benq.com/en-us/where-to-buy.html"><h4>Where to buy</h4></a></li>
            </ul>
          </div>
          <div style="width:180px;height:220px;float:left;padding:40px 0">
            <ul style="padding:0">
              <li><a style="text-decoration:none;color:#000" href="https://zowie.benq.com/en-us/news.html"><h4>News</h4></a></li>
            </ul>
          </div>
          <div style="width:180px;height:220px;float:left;padding:40px 0">
            <ul style="padding:0">
              <li style="padding-bottom:20px"><h4>Support</h4></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px;" href="https://zowie.benq.com/en-us/support.html">Support</a></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px" href="https://zowie.benq.com/en-us/support.html">Download & FAQ</a></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px" href="https://zowie.benq.com/en-us/support/contact.html">Contact</a></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px" href="https://zowie.benq.com/en-us/support/warranty/gear.html">Warranty</a></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px" href="https://zowie.benq.com/en-us/support/mouse-rate-checker.html">Mouse Rate</a></li>
            </ul>
          </div>
          <div style="width:180px;height:220px;float:left;padding:40px 0">
            <ul style="padding:0">
              <li><a style="text-decoration:none;color:#000" href="https://zowie.benq.com/en-us/knowledge.html"><h4>Knowledge Center</h4></a></li>
            </ul>
          </div>
          <div style="width:180px;height:220px;float:left;padding:40px 0">
            <ul style="padding:0">
              <li style="padding-bottom:20px"><h4>About</h4></li>
              <li><a style="text-decoration:none;color:#888;font-size:12px;line-height:15px;" href="https://zowie.benq.com/en-us/about/zowie.html">ZOWIE</a></li>
            </ul>
          </div>
          
        <div style="clear:both"></div>
        <div style=" line-height:20px;padding:40px 0;">
          <div style="border-top:1px #888 solid; width:100%;padding:10px 0">
            <a href="https://zowie.benq.com/en-us/welcome.html" style="text-decoration:none;color:#888;font-size:12px;line-height:15px;">United States</a>
            <p  style="text-decoration:none;color:#888;font-size:12px;line-height:15px; float:right">Copyright @ BenQ Corporation. All Rights Reserved.</p>
          </div> 
        </div>

        </div>
    </div>
    </div>
  </div>
</template>

<script>
import Es from '~/config/es.json'
import Eg from '~/config/eg.json'
import As from '~/config/as.json'
import Ag from '~/config/ag.json'

export default {
  components: {
  },
  data() {
    return {
      radio: {
        shape: null,
        coating: null
      },
      modelOne:"",
      modelOneSeries:"",
      modelTwo:"",
      modelTwoSeries:"",
      picMode:"",
      secondArea: false,
      configFile: null,
      featureDescription: "",
      itemlist:[
          {
            name: "",
            title:"XL",
            Type: "",
            covered: true,
            content: "",
            showtime: true,
            // callback: this.print
          },
          {
            name: "",
            title:"",
            Type: "",
            covered: true,
            content: "",
            showtime: true,
            // callback: this.print
          },
          {
            name: "FK1+",
            Type: 2,
            Series:"FK Series",
            content: "90% of CS:GO professional players using FK1+ are claw grip.",
            showtime: false,
            covered: false,
            pic1:"fk1+-right-photo",
            pic2:"fk1+-right-photo",
            callback: this.print
          },
          {
            name: "",
            title:"",
            Type: "",
            content: "",
            covered: true,
            showtime: true,
            // callback: this.print
          },
          {
            name: "",
            title:"",
            Type: "",
            content: "",
            covered: true,
            showtime: true,
            // callback: this.print
          },
          {
            name: "",
            title:"L",
            Type: "",
            content: "",
            covered: true,
            showtime: true,
            // callback: this.print
          },
          {
            name: "EC1",
            Type: 0,
            showtime: false,
            covered: false,
            Series:"EC Series",
            pic1: "ec1-b-right-photo",
            pic2: "ec1-b-dv-blue-right-photo",
            content: "80% of CS:GO professional players using EC1 are palm grip. 20% of players are claw grip.",
            callback: this.print
          },
          {
            name: "FK1",
            Type: 3,
            showtime: false,
            covered: false,
            Series:"FK Series",
            pic1: "fk1-right-photo",
            pic2: "fk1-right-photo",
            content: "80% of CS:GO professional players using FK1 are claw grip. 20% of players are palm grip.",
            callback: this.print
          },
          {
            name: "ZA11",
            Type: 5,
            showtime: false,
            covered: false,
            Series:"ZA Series",
            pic1: "za11-right-photo",
            pic2:"za11-white-right-photo",
            content: "90% of CS:GO professional players using ZA11 are palm grip.",
            callback: this.print
          },
          {
            name: "",
            title:"",
            Type: "",
            content: "",
            covered: true,
            showtime: true,
            // callback: this.print
          },
          {
            name: "",
            title:"M",
            Type: "",
            content: "",
            covered: true,
            showtime: true,
            // callback: this.print
          },
          {
            name: "EC2",
            Type: 1,
            showtime: false,
            covered: false,
            Series:"EC Series",
            pic1: "ec2-b-right-photo",
            pic2: "ec2-b-dv-blue-right-photo",
            content: "50% of CS:GO professional players using EC2 are claw grip. 50% of players are palm grip.",
            callback: this.print
          },

          {
            name: "FK2",
            Type: 4,
            showtime: false,
            covered: false,
            Series:"FK Series",
            pic1:"fk2-right-photo",
            pic2:"fk2-white-right-photo",
            content: "50% of CS:GO professional players using FK2 are claw grip, 50% of players are palm grip.",
            callback: this.print
          },

          {
            name: "ZA12",
            Type: 6,
            showtime: false,
            covered: false,
            Series:"ZA Series",
            pic1:"za12-right-photo",
            pic2:"za12-right-photo",
            content:"65% of CS:GO professional players using ZA12 are claw grip. 35% of players are palm grip.",
            callback: this.print
          },
          {
            name: "S1",
            Type: 8,
            showtime: false,
            covered: false,
            Series:"S Series",
            pic1:"s1-right-photo",
            pic2:"s1-dv-blue-right-photo",
            content:"65% of CS:GO professional players using S2 are claw grip. 35% of players are palm grip.",
            callback: this.print
          },
          {
            name: "",
            title:"S",
            Type: "",
            content: "",
            covered: true,
            showtime: true,
            // callback: this.print
          },
          {
            name: "",
            title:"",
            Type: "",
            content: "",
            covered: true,
            showtime: true,
            // callback: this.print
          },
          {
            name: "",
            title:"",
            Type: "",
            content: "",
            covered: true,
            showtime: true,
            // callback: this.print
          },
          {
            name: "ZA13",
            Type: 7,
            showtime: false,
            covered: false,
            Series:"ZA Series",
            pic1:"za13-right-photo",
            pic2:"za13-right-photo",
            content:"50% of CS:GO professional players using ZA13 are claw grip, 50% of players are palm grip.",
            callback: this.print
          },
          {
            name: "S2",
            Type: 9,
            showtime: false,
            covered: false,
            Series:"S Series",
            pic1:"s2-right-photo",
            pic2:"s2-dv-blue-right-photo",
            content:"60% of CS:GO professional players using S2 are claw grip. 40% of players are palm grip.",
            callback: this.print
          }
      ],
    }
  },
  mounted() {
    console.log("Es,Eg,As,Ag: ", Es,Eg,As,Ag);
  },
  computed: {

  },
  methods: {
    select(item,index) {

      if (this.modelOne == "") {
        this.modelOne = item.name;
        this.modelOneSeries =item.Series;
      } else {
        if (this.modelOne == item.name) {
          if (this.modelTwo !== "") {
            this.modelOne = this.modelTwo;
            this.modelOneSeries = this.modelTwoSeries ;
            this.modelTwo = "";
            this.modelTwoSeries = "";
              for (var i = 0 ; i<= 19; i++){
                if (this.itemlist[i].name !== "") {
                  this.itemlist[i].showtime = false;
                }
              }
          }else {this.modelOne = "";}
        } else {
          if (this.modelTwo == "") {
            this.modelTwo = item.name;
            this.modelTwoSeries = item.Series;
            for (var i = 0 ; i<= 19; i++){
              if (this.itemlist[i].name !== "" && this.itemlist[i].name !== this.modelOne && this.itemlist[i].name !== this.modelTwo) {
                this.itemlist[i].showtime = true;
              }
            }
          } else {
            if (this.modelTwo == item.name) {
              this.modelTwo = "";
              this.modelTwoSeries = "";
              for (var i = 0 ; i<= 19; i++){
                if (this.itemlist[i].name !== "") {
                  this.itemlist[i].showtime = false;
                }
              }
            }
          }
        }
      };

      this.chioceFeature();
      console.log(item.name,this.modelOne===item.name,this.modelOne,this.modelTwo,this.itemlist)
    },
    handleSwitch(){
      if (this.modelTwo != "") {
          var xx,yy;
          xx = this.modelOne;
          yy = this.modelOneSeries;
          this.modelOne = this.modelTwo;
          this.modelOneSeries = this.modelTwoSeries;
          this.modelTwo = xx;
          this.modelTwoSeries = yy;
      }
    },
    handleSearch() {
      for (var i = 0; i<= 19; i++) {
          this.itemlist[i].covered = false;
          if (this.itemlist[i].name !== "") {
              this.itemlist[i].showtime = false;
          }          
      };
      this.modelOne= "";
      this.modelOneSeries ="";
      this.modelTwo= "";
      this.modelTwoSeries ="";
      const file = this.radio.shape + this.radio.coating;
      switch(file) {
        case "ac":
          console.log("use es file");
          this.secondArea = "ac";
          this.configFile = Es;
          this.picMode = 1;
          this.itemlist[2].covered =this.itemlist[7].covered =this.itemlist[8].covered =this.itemlist[12].covered =this.itemlist[13].covered =this.itemlist[14].covered =this.itemlist[18].covered =this.itemlist[19].covered  = true;
          break;
        case "ad":
          console.log("use eg file");
          this.secondArea = "ad";
          this.configFile = Eg;
          this.picMode = 2;
          this.itemlist[2].covered =this.itemlist[7].covered =this.itemlist[8].covered =this.itemlist[12].covered =this.itemlist[13].covered =this.itemlist[14].covered =this.itemlist[18].covered =this.itemlist[19].covered  = true;
          break;
        case "bc":
          console.log("use as file");
          this.secondArea = "bc";
          this.configFile = As;
          this.picMode = 1;
          this.itemlist[6].covered = this.itemlist[11].covered = true;
          break;
        case "bd":
          console.log("use ag file");
          this.secondArea = "bd";
          this.configFile = Ag;
          this.picMode = 2;
          this.itemlist[2].covered =this.itemlist[7].covered =this.itemlist[6].covered =this.itemlist[11].covered =this.itemlist[13].covered =this.itemlist[18].covered = true;
          break;
        default:
          console.log("no config");
          break;
      }
    },
    handleClear() {
      this.radio.shape = null;
      this.radio.coating = null;
      this.secondArea = "";
      this.modelOne ="";
      this.modelTwo = "";
    },
    secondClear() {
      for (var i = 0; i<= 19; i++) {
        if (this.itemlist[i].name !== "") {
          this.itemlist[i].showtime = false;
        }
      };
      this.modelOne= "";
      this.modelOneSeries ="";
      this.modelTwo= "";
      this.modelTwoSeries ="";
    },
    chioceFeature() {
      switch(this.modelOne) {
        case "EC1":
        case "EC2":
          this.featureDescription = "EC Series has the same shape and comes in two sizes, EC1 is bigger and EC2 is smaller.";
          break;
        case "FK1+":
          switch(this.modelTwo) {
            case "FK1":
            case "FK2":
              this.featureDescription = "FK Series has the same shape and comes in three sizes, FK1+ is the biggest, FK1 is in between, and FK2 is the smallest.";
              break;
            case "ZA11":
            case "ZA12":
            case "ZA13":
              this.featureDescription = `1. Both series are ambidextrous and are able to switch between right or left-hand modes by holding down button combinations during plug-in. No drivers required. \n\n 2. FK Series has a lower profile and its hump is closer to fingers, providing less support for palm; ZA Series has a higher profile, providing more support for palm. \n\n 3. ZA Series has projected notches on both front ends that allow users to lift the mouse easily.`;
              break;
            case "S1":
            case "S2":
              this.featureDescription = `1. Both series are ambidextrous. The S Series without right-side buttons is designed for right-handed. \n\n 2. FK Series has a lower profile providing less support for palm; S Series has a higher profile, providing more support for palm. \n\n 3. S Series is designed to have a shorter overall length, allowing users to easily wrap around and hold the mouse. The front ends of the mouse have been raised to provide more space to place the 4th finger and easily lift the mouse.`;
              break;
          }
          break;
        case "FK1":
          switch(this.modelTwo) {
            case "FK1+":
            case "FK2":
              this.featureDescription = "FK Series has the same shape and comes in three sizes, FK1+ is the biggest, FK1 is in between, and FK2 is the smallest.";
              break;
            case "ZA11":
            case "ZA12":
            case "ZA13":
              this.featureDescription = `1. Both series are ambidextrous and are able to switch between right or left-hand modes by holding down button combinations during plug-in. No drivers required. \n\n 2. FK Series has a lower profile and its hump is closer to fingers, providing less support for palm; ZA Series has a higher profile, providing more support for palm. \n\n 3. ZA Series has projected notches on both front ends that allow users to lift the mouse easily.`;
              break;
            case "S1":
            case "S2":
              this.featureDescription = `1. Both series are ambidextrous. The S Series without right-side buttons is designed for right-handed. \n\n 2. FK Series has a lower profile providing less support for palm; S Series has a higher profile, providing more support for palm. \n\n 3. S Series is designed to have a shorter overall length, allowing users to easily wrap around and hold the mouse. The front ends of the mouse have been raised to provide more space to place the 4th finger and easily lift the mouse.`;
              break;
          }
          break;
        case "FK2":
          switch(this.modelTwo) {
            case "FK1+":
            case "FK1":
              this.featureDescription = "FK Series has the same shape and comes in three sizes, FK1+ is the biggest, FK1 is in between, and FK2 is the smallest.";
              break;
            case "ZA11":
            case "ZA12":
            case "ZA13":
              this.featureDescription = `1. Both series are ambidextrous and are able to switch between right or left-hand modes by holding down button combinations during plug-in. No drivers required. \n\n 2. FK Series has a lower profile and its hump is closer to fingers, providing less support for palm; ZA Series has a higher profile, providing more support for palm. \n\n 3. ZA Series has projected notches on both front ends that allow users to lift the mouse easily.`;
              break;
            case "S1":
            case "S2":
              this.featureDescription = `1. Both series are ambidextrous. The S Series without right-side buttons is designed for right-handed. \n\n 2. FK Series has a lower profile providing less support for palm; S Series has a higher profile, providing more support for palm. \n\n 3. S Series is designed to have a shorter overall length, allowing users to easily wrap around and hold the mouse. The front ends of the mouse have been raised to provide more space to place the 4th finger and easily lift the mouse.`;
              break;
          }
          break;
        case "ZA11":
          switch(this.modelTwo) {
            case "FK1+":
            case "FK1":
            case "FK2":
              this.featureDescription = `1. Both series are ambidextrous and are able to switch between right or left-hand modes by holding down button combinations during plug-in. No drivers required. \n\n 2. FK Series has a lower profile and its hump is closer to fingers, providing less support for palm; ZA Series has a higher profile, providing more support for palm. \n\n 3. ZA Series has projected notches on both front ends that allow users to lift the mouse easily.`;
              break;
            case "ZA11":
            case "ZA13":
              this.featureDescription = "ZA Series has the same shape and comes in three sizes, ZA11 is the biggest, ZA12 is in between, and ZA13 is the smallest.";
              break;
            case "S1":
            case "S2":
              this.featureDescription = `1. Both series are ambidextrous, and the S Series without right-side buttons is designed for right-handed users. \n\n 2. Both ZA and S Series have a high profile design providing sufficient palm support, however their highest points are in different positions. The ZA’s peak is closer to the back while the S’s peak is more in the center. Because of this the weight distribution will be different giving each mouse a different movement feel. \n\n 3. Both ZA and S Series's front ends are designed for easy lifting during swiping movements or quick adjustments. ZA has a notch for your 4th finger while the S has more room to place the 4th finger.`;
              break;
          }
          break;
        case "ZA12":
          switch(this.modelTwo) {
            case "FK1+":
            case "FK1":
            case "FK2":
              this.featureDescription = `1. Both series are ambidextrous and are able to switch between right or left-hand modes by holding down button combinations during plug-in. No drivers required. \n\n 2. FK Series has a lower profile and its hump is closer to fingers, providing less support for palm; ZA Series has a higher profile, providing more support for palm. \n\n 3. ZA Series has projected notches on both front ends that allow users to lift the mouse easily.`;
              break;
            case "ZA12":
            case "ZA13":
              this.featureDescription = "ZA Series has the same shape and comes in three sizes, ZA11 is the biggest, ZA12 is in between, and ZA13 is the smallest.";
              break;
            case "S1":
            case "S2":
              this.featureDescription = `1. Both series are ambidextrous, and the S Series without right-side buttons is designed for right-handed users. \n\n 2. Both ZA and S Series have a high profile design providing sufficient palm support, however their highest points are in different positions. The ZA’s peak is closer to the back while the S’s peak is more in the center. Because of this the weight distribution will be different giving each mouse a different movement feel. \n\n 3. Both ZA and S Series's front ends are designed for easy lifting during swiping movements or quick adjustments. ZA has a notch for your 4th finger while the S has more room to place the 4th finger.`;
              break;
          }
          break;
        case "ZA13":
          switch(this.modelTwo) {
            case "FK1+":
            case "FK1":
            case "FK2":
              this.featureDescription = `1. Both series are ambidextrous and are able to switch between right or left-hand modes by holding down button combinations during plug-in. No drivers required. \n\n 2. FK Series has a lower profile and its hump is closer to fingers, providing less support for palm; ZA Series has a higher profile, providing more support for palm. \n\n 3. ZA Series has projected notches on both front ends that allow users to lift the mouse easily.`;
              break;
            case "ZA11":
            case "ZA12":
              this.featureDescription = "ZA Series has the same shape and comes in three sizes, ZA11 is the biggest, ZA12 is in between, and ZA13 is the smallest.";
              break;
            case "S1":
            case "S2":
              this.featureDescription = `1. Both series are ambidextrous, and the S Series without right-side buttons is designed for right-handed users.\n\n2. Both ZA and S Series have a high profile design providing sufficient palm support, however their highest points are in different positions. The ZA’s peak is closer to the back while the S’s peak is more in the center. Because of this the weight distribution will be different giving each mouse a different movement feel.\n\n3. Both ZA and S Series's front ends are designed for easy lifting during swiping movements or quick adjustments. ZA has a notch for your 4th finger while the S has more room to place the 4th finger.`;
              break;
          }
          break;
        case "S1":
          switch(this.modelTwo) {
            case "FK1+":
            case "FK1":
            case "FK2":
              this.featureDescription = `1. Both series are ambidextrous. The S Series without right-side buttons is designed for right-handed.\n\n2. FK Series has a lower profile providing less support for palm; S Series has a higher profile, providing more support for palm.\n\n3. S Series is designed to have a shorter overall length, allowing users to easily wrap around and hold the mouse. The front ends of the mouse have been raised to provide more space to place the 4th finger and easily lift the mouse.`;
              break;
            case "ZA11":
            case "ZA12":
            case "ZA13":
              this.featureDescription = `1. Both series are ambidextrous, and the S Series without right-side buttons is designed for right-handed users.\n\n2. Both ZA and S Series have a high profile design providing sufficient palm support, however their highest points are in different positions. The ZA’s peak is closer to the back while the S’s peak is more in the center. Because of this the weight distribution will be different giving each mouse a different movement feel.\n\n3. Both ZA and S Series's front ends are designed for easy lifting during swiping movements or quick adjustments. ZA has a notch for your 4th finger while the S has more room to place the 4th finger.              `;
              break;
            case "S2":
              this.featureDescription = "S Series has the same shape and comes in two sizes, S1 is bigger and S2 is smaller.";
              break;
          }
          break;
        case "S2":
          switch(this.modelTwo) {
            case "FK1+":
            case "FK1":
            case "FK2":
              this.featureDescription = `1. Both series are ambidextrous. The S Series without right-side buttons is designed for right-handed.\n\n2. FK Series has a lower profile providing less support for palm; S Series has a higher profile, providing more support for palm.\n\n3. S Series is designed to have a shorter overall length, allowing users to easily wrap around and hold the mouse. The front ends of the mouse have been raised to provide more space to place the 4th finger and easily lift the mouse.`;
              break;
            case "ZA11":
            case "ZA12":
            case "ZA13":
              this.featureDescription = `1. Both series are ambidextrous, and the S Series without right-side buttons is designed for right-handed users.\n\n2. Both ZA and S Series have a high profile design providing sufficient palm support, however their highest points are in different positions. The ZA’s peak is closer to the back while the S’s peak is more in the center. Because of this the weight distribution will be different giving each mouse a different movement feel.\n\n3. Both ZA and S Series's front ends are designed for easy lifting during swiping movements or quick adjustments. ZA has a notch for your 4th finger while the S has more room to place the 4th finger.              `;
              break;
            case "S1":
              this.featureDescription = "S Series has the same shape and comes in two sizes, S1 is bigger and S2 is smaller.";
              break;
          }
          break;
      }
    }
  }
}
</script>

<style>
.top-nav {
  height:60px;width:100%;background:#000;top:0px;position:absolute;overflow:hidden;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  background:#fff;
}

.title {
  font-family: 'Montserrat','Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding: 15px 0 50px;
}
.content {
  width: 1112px;
    /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: left;
  margin: auto;
}
.content2 {
  width: 1172px;
    /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: left;
  margin: auto;
}
.ul-c {
  line-height: 60px;
}
.li-c {
  font-style:normal;
  margin: 0 40px;
}
.radio-beauty-container {
  font-size: 19px;
}
.radio-beauty-container .radio-beauty:hover, .radio-beauty-container input[type="radio"]:checked + .radio-beauty {
  background-color: #fff;
  border: #CC0040 5px solid;
  background-clip: content-box;
}
.radio-beauty-container .radio-name {
  vertical-align: middle;
  font-size: 16px;
}
.radio-beauty-container .radio-beauty {
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid #ccc;
  vertical-align: middle;
  margin: 0 6px 0 6px;
  border-radius: 50%;
}
.radio-beauty-container .radio-beauty:hover {
  /* box-shadow: 0 0 7px #CC0040; */
}
 li {list-style-type:none;}
.divMask {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top:0;
            left: 0;
            background: rgba(0,0,0,0.1);
            background-position: center;
            background-repeat: no-repeat;
            z-index: 3;
            background-size: 30%;
}
.checked {            
            content: "";
            width: 15px;
            height: 30px;
            margin-left: 10px;
            border: 4px solid #fff;
            border-top: none;
            border-left: none;
            transform: rotate(45deg)
}
.nav {
  float:left;
  padding:0 20px;
}
.nav a {
  color:#fff;
  font-size: 14px;
  font-weight:600; 
}
.nav:hover {
  color:#ce0040;
  font-weight:800; 
  border-bottom:6px #ce0040 solid;
}
.nav:hover a {
  color:#ce0040;
}
.result {
  float: right;
  padding-right: 60px;
  font-size: 18px;
  line-height: 45px;
  text-decoration:none;
}
.button--switch {
  float: right;
  display: inline-block;
  /* border-radius: 4px; */
  border: 1px solid #CC0040;;
  color: #fff;;
  background-color: #CC0040;
  text-decoration: none;
  padding: 10px 30px;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  margin-right:30px;
  width:160px;
  /* height: 40px; */
}

.button--switch:hover {
  color: #fff;
  background-color: #CC0040;
}
.text-wrapper {
  white-space: pre-wrap;
}
.formhead {
  line-height:80px;color:#fff;font-size: 30px;padding:325 0;text-align: center;height:80px;width:20%;background:#444;float:left;border:#000 1px solid;
}
</style>