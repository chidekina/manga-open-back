test('Server Test', async () => {
    const response = await fetch('http://localhost:3000')
    expect(response.status).toBe(200);
})

test('Soma', () => {
    expect(1 + 1).toBe(3)
})