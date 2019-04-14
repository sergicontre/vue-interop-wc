<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- My Web Component -->
    <my-credit-card :title="title" @credit-card-details="sendInfo"></my-credit-card>
    <p> <strong>(*) Click over VISA icon and see how Vue.js Framework listen credit card info event from Web Component</strong></p>
    <p>{{ info }}</p>
  </div>
</template>

<script>
  
import 'my-credit-card';  
 
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    title: {
      type: String,
      default: 'LitElement Bank'
    }
  },
	data: function () {
		return {
			info: {}
    };
	},
  methods: {
		sendInfo: function (event) {
			if (event.detail) {
				this.info = event.detail;
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
