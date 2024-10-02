import dynamoDb from '../../aws-config';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { UserId, Name } = req.body;

    const params = {
      TableName: 'Users',
      Item: {
        'UserId': { S: UserId },
        'Name': { S: Name }
      }
    };

    try {
      await dynamoDb.putItem(params).promise();
      res.status(200).json({ message: 'User added successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
