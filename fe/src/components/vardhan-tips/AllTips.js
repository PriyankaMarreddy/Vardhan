import React, { useState } from 'react';
import Tips from './Tips';
import { tips } from './tips-content';

const AllTips = (props) => {
  

  return (
    <>
    {
      tips.map((item, index) => (
        (props.index === 0) || (props.index === index+1) ? 
        <Tips 
        title={item.title} 
        tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        tip3Heading={item.tip3head} tip3Suggest={item.tip3suggest} tip3Content={item.tip3}
        tip4Heading={item.tip4head} tip4Suggest={item.tip4suggest} tip4Content={item.tip4}

         />
        // :props.index === 1 && item.title === 'Branding' ? 
        // <Tips 
        // title={item.title} 
        // tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        // tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        //  />
        // :props.index === 2 && item.title === 'Business Consulting' ? 
        // <Tips 
        // title={item.title} 
        // tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        // tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        //  />
        // :props.index === 3 && item.title === 'Career Counselling' ? 
        // <Tips 
        // title={item.title} 
        // tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        // tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        //  />
        // :props.index === 4 && item.title === 'Digital Marketing' ? 
        // <Tips 
        // title={item.title} 
        // tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        // tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        //  />
        // :props.index === 5 && item.title === 'Go-To-Market Strategy' ? 
        // <Tips 
        // title={item.title} 
        // tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        // tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        //  />
        // :props.index === 6 && item.title === 'Image Consulting' ? 
        // <Tips 
        // title={item.title} 
        // tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        // tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        //  />
        // :props.index === 7 && item.title === 'Investor Pitch Models' ? 
        // <Tips 
        // title={item.title} 
        // tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        // tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        //  />
        // :props.index === 8 && item.title === 'Monetization Models' ? 
        // <Tips 
        // title={item.title} 
        // tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        // tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        //  />
        // :props.index === 9 && item.title === 'Personal Counselling' ? 
        // <Tips 
        // title={item.title} 
        // tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        // tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        //  />
        // :props.index === 10 && item.title === 'Sales - Marketing Consulting' ? 
        // <Tips 
        // title={item.title} 
        // tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        // tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        //  />
        // :props.index === 11 && item.title === 'Startup Consulting' ? 
        // <Tips 
        // title={item.title} 
        // tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        // tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        //  />
        // :props.index === 12 && item.title === 'UI UX' ? 
        // <Tips 
        // title={item.title} 
        // tip1Heading={item.tip1head} tip1Suggest={item.tip1suggest} tip1Content={item.tip1} 
        // tip2Heading={item.tip2head} tip2Suggest={item.tip2suggest} tip2Content={item.tip2}
        //  />
        

        :null
      ))














      // props.index === 0 && 
      //   tips.map(
      //       (item, index) => 
      //            (
      //               <>
      //               <h2>{item.title}</h2>
      //               <p>{item.tip1}</p>
      //               <p>{item.tip2}</p>
      //               </>
      //           )
            
      //   )
        
    }
    </>
  )
}

export default AllTips;