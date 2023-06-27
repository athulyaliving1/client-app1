import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFoodMenu } from '../features/userAction';


function FoodComponent({ fetchFoodMenu, foodMenu, loading, error }) {
  useEffect(() => {
    fetchFoodMenu();
  }, [fetchFoodMenu]);

  return (
    <div>
      <h2>Food Menu</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : foodMenu ? (
        // <div>
        //   {foodMenu.map((item, index) => (
        //     <div key={index}>
        //       <p>Food Type: {item.activity_timing}</p>
        //       <p>Menu Items: {item.activity_bp_systole}</p>
        //    </div>
        //   ))}
        // </div>


<div className="max-w-screen-xl mx-auto px-4 md:px-8">
<div className="max-w-lg">
    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
        Team members
    </h3>
    <p className="text-gray-600 mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
</div>
<div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
    <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
                <th className="py-3 px-6">Food Type</th>
                <th className="py-3 px-6">Menu Item</th>
                
            </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
            {
                foodMenu.map((item, idx) => (
                    <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap">{item.activity_timing}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.activity_bp_systole}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
</div>
</div>


      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    foodMenu: state.foodMenu.foodMenu,
    loading: state.foodMenu.loading,
    error: state.foodMenu.error,
  };
};

const mapDispatchToProps = {
  fetchFoodMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodComponent);
