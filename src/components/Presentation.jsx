import React, { Component } from 'react'
import { Card } from 'flowbite-react';

export default class Presentation extends Component {
    render() {
        return (
            <a href={this.props.url}
                className="flex flex-col
                    mt-6  
                    w-full
                    md:flex-row 
                    items-center 
                    bg-white border 
                    border-gray-200 rounded-lg shadow 
                    hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96  md:rounded-none md:rounded-s-lg" src={this.props.image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{this.props.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus vero voluptas debitis delectus accusantium voluptate minus sit quam ullam quasi. Laborum, animi. Aspernatur quos cumque unde fugiat id veritatis accusantium.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor optio molestias vitae ex enim sunt distinctio excepturi ipsa assumenda hic, laboriosam, inventore, nostrum praesentium atque voluptatibus? Suscipit, exercitationem quos!</p>
                </div>
            </a>
        )
    }
}
