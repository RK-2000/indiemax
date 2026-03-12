const { getPayload } = require('payload')
require('dotenv/config')

const resetAdminUser = async () => {
  const payload = await getPayload({
    config: require('../src/payload/payload.config.ts').default,
  })

  console.log('🔄 Resetting admin user...')

  // Delete existing admin user if exists
  try {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length > 0) {
      console.log('🗑️  Deleting existing users...')
      for (const user of existingUsers.docs) {
        await payload.delete({
          collection: 'users',
          id: user.id,
        })
      }
    }
  } catch (error) {
    console.log('No existing users found or error:', error.message)
  }

  // Create new admin user
  try {
    const newUser = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@indiemax.com',
        password: 'admin123',
        name: 'Admin User',
      },
    })

    console.log('✅ Admin user created successfully!')
    console.log('📧 Email: admin@indiemax.com')
    console.log('🔒 Password: admin123')
    console.log('⚠️  Please change the password after logging in!')
    
  } catch (error) {
    console.error('❌ Error creating admin user:', error.message)
  }

  process.exit(0)
}

resetAdminUser().catch((error) => {
  console.error('❌ Script failed:', error)
  process.exit(1)
})