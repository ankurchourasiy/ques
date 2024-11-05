// src/components/LinkedList.js

import React, { useState } from 'react';

// Node class for each element in the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class for managing nodes
class LinkedListClass {
    constructor() {
        this.head = null;
    }

    // Add a node at the end of the list
    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Delete a node by value
    deleteNode(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Delete a node from the front of the list
    deleteNodeFromFront() {
        if (this.head) {
            this.head = this.head.next;
        }
    }

    // Delete a node from the back of the list
    deleteNodeFromBack() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }

        current.next = null;
    }

    // Get all values in the linked list as an array
    getValues() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

const LinkedList = () => {
    const [linkedList] = useState(new LinkedListClass());
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);

    // Handle adding a node
    const handleAddNode = () => {
        if (value !== '') {
            linkedList.addNode(value);
            setList(linkedList.getValues());
            setValue('');
        }
    };

    // Handle deleting a node by value
    const handleDeleteNode = () => {
        if (value !== '') {
            linkedList.deleteNode(value);
            setList(linkedList.getValues());
            setValue('');
        }
    };

    // Handle deleting a node from the front
    const handleDeleteNodeFromFront = () => {
        linkedList.deleteNodeFromFront();
        setList(linkedList.getValues());
    };

    // Handle deleting a node from the back
    const handleDeleteNodeFromBack = () => {
        linkedList.deleteNodeFromBack();
        setList(linkedList.getValues());
    };

    return (
        <div>
            <h2>Singly Linked List Operations</h2>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter a value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handleAddNode} style={{ marginLeft: '10px' }}>Add Node</button>
                <button onClick={handleDeleteNode} style={{ marginLeft: '10px' }}>Delete Node by Value</button>
                <button onClick={handleDeleteNodeFromFront} style={{ marginLeft: '10px' }}>Delete from Front</button>
                <button onClick={handleDeleteNodeFromBack} style={{ marginLeft: '10px' }}>Delete from Back</button>
            </div>

            <div>
                <h3>Linked List Contents</h3>
                {list.length === 0 ? (
                    <p>The linked list is empty.</p>
                ) : (
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default LinkedList;
