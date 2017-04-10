import React from 'react';
import './main.css'




const styles = {

 image:{
   height:400,
   width:"100%"
  }, 

  h1Div:{
  	background:'#DAF1E0'
  }, 

  h1:{
  	marginLeft: 10, 
  },

  p:{
  	textIndent: 25,
  	fontSize:18
  },
}






export default React.createClass({
  render() {
    return (
      	<div id="storyDiv">
      		<div style={styles.h1Div}><h1 style={styles.h1}>Our Story</h1></div>
			<p style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum vel enim sed imperdiet. Nunc semper libero ex, eu lacinia lorem vulputate id. Vestibulum consectetur ante a ipsum ullamcorper, ac accumsan elit egestas. Proin enim erat, faucibus sed rutrum vel, placerat eget ante. Suspendisse dolor mi, sagittis id urna vel, viverra sagittis tortor. Aenean maximus dapibus laoreet. Maecenas gravida semper lobortis. Mauris convallis bibendum auctor. Donec eget aliquet leo, nec semper nisi. Integer at nibh tortor. Cras ut pellentesque arcu, sed venenatis odio. Nam consequat vulputate aliquet. Proin facilisis, mauris tincidunt euismod ultricies, purus nibh pretium felis, a porttitor augue arcu et neque. Morbi sit amet fermentum leo.<br/>
			<br/>
			Maecenas a hendrerit ipsum. Nullam venenatis sagittis massa quis luctus. Curabitur in libero nunc. Nam ullamcorper lobortis dui nec ultrices. Praesent eu erat posuere, vestibulum risus eu, tincidunt enim. Phasellus euismod bibendum urna. Phasellus massa libero, tempus ut vulputate sed, gravida vitae leo. In aliquam fringilla eros non tempor. In id odio vel dolor bibendum mollis et nec purus. Ut laoreet odio vel fermentum imperdiet. Proin sed turpis velit. Suspendisse ullamcorper condimentum lorem, sed interdum tortor tincidunt sed.
			</p>

			<img style={styles.image} src="http://il9.picdn.net/shutterstock/videos/10117007/thumb/2.jpg" alt="touching grass" id="touchgrass" />

		</div>
    )
  }
})
