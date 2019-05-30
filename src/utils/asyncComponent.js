// 异步加载组件
import React, { Suspense } from 'react';

const asyncComponent = (Component) => {
    return (props) => (
      <Suspense
        fallback={
          <div className="x-loading-center">
              
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  }

export default asyncComponent;